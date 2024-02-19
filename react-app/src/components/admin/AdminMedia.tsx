import { useState } from "react";
import * as allMediaService from "../../apiServices/allMediaService";
import { Media } from "../../interfaces/Media";

interface Props {
  onCancel: () => void;
  media?: Media | null;
}

const AdminMedia = (props?: Props) => {
  let newMediaCreation = true;
  let alertMessageText = "added";

  // If a media is provided in 'props', then we are editing a media item.
  // Set newMediaCreation to false and update the alert message accordingly.
  if (props?.media) {
    newMediaCreation = false;
    alertMessageText = "edited";
  }

  // State variables to manage form data
  const [title, setTitle] = useState(props?.media?.title || "");
  const [type, setType] = useState(props?.media?.type || "Movie");
  const [releaseDate, setReleaseDate] = useState(
    props?.media?.releaseDate ? new Date(props.media?.releaseDate) : new Date()
  );
  const [imgURL, setImgURL] = useState(props?.media?.imgURL || "");

  // Function to update the title state when input changes
  const updateTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  // Function to update the type state when select input changes
  const updateType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value as "Movie" | "Series");
  };

  // Function to update the releaseDate state when date input changes
  const updateReleaseDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = event.target.value;
    const dateObject = new Date(dateString);
    // Check if dateObject is a valid date
    if (!isNaN(dateObject.getTime())) {
      setReleaseDate(dateObject);
    } else {
      console.error("Invalid date input");
    }
  };

  // Function to update the imgURL state when input changes
  const updateImgURL = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImgURL(event.target.value);
  };

  // Function to handle form submission
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedMedia: Media = {
      title,
      type: type as "Movie" | "Series",
      releaseDate: releaseDate.toISOString().split("T")[0],
      imgURL,
    };
    try {
      if (newMediaCreation) {
        await allMediaService.createAllMedia(updatedMedia);
      } else {
        console.log("editAllMediaById", props?.media?.id);
        await allMediaService.editAllMediaById({
          id: props?.media?.id,
          ...updatedMedia,
        });
      }
      handleClearFormValues();
      alert(`Media ${alertMessageText} successfully!`);
      // here's where I want to call the loadMedia so that the MediaList refreshes with
    } catch (error) {
      console.error("Error adding media:", error);
      alert("Failed to add media. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      if (props?.media?.id)
        await allMediaService.deleteAllMediaById(props?.media?.id);
      console.log("Deleted", props?.media?.id);
    } catch (error) {
      console.error("Error deleting media:", error);
      alert("Failed to delete media. Please try again.");
    }
    handleClearFormValues();
  };

  const handleCancelClick = () => {
    console.log("Form Reset");
    handleClearFormValues();
  };

  // Clear form fields after successful submission
  const handleClearFormValues = () => {
    setTitle("");
    setType("Movie"); // Reset type to default value "Movie"
    setImgURL("");
    setReleaseDate(new Date()); // Reset releaseDate to current date
    props?.onCancel();
  };

  return (
    <div className="container">
      <form onSubmit={handleFormSubmit} onReset={handleCancelClick}>
        <h3>{newMediaCreation ? "Add New" : "Edit"} Media</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={updateTitle}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="type" className="form-label">
            Type:
          </label>
          <select
            className="form-select"
            id="type"
            value={type}
            onChange={updateType}
            required
          >
            <option value="Movie">Movie</option>
            <option value="Series">Series</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="imgURL" className="form-label">
            Image URL:
          </label>
          <input
            type="string"
            className="form-control"
            id="imgURL"
            value={imgURL}
            onChange={updateImgURL}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="releaseDate" className="form-label">
            Release Date:
          </label>
          <input
            type="date"
            className="form-control"
            id="releaseDate"
            value={releaseDate.toISOString().split("T")[0]} // Format date for input value
            onChange={updateReleaseDate}
            required
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary m-1">
            Confirm
          </button>
          <button type="reset" className="btn btn-secondary">
            Cancel
          </button>
          {!newMediaCreation && (
            <button
              type="button"
              className="btn btn-danger m-1"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AdminMedia;
