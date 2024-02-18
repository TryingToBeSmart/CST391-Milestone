import { useState } from "react";
import * as allMediaService from "../../apiServices/allMediaService";
import { Media } from "../../interfaces/Media";

interface Props extends Partial<Media> {}

const AdminMedia = (props?: Props) => {
  let newMediaCreation = true;
  let alertMessage = "added";
  ``;

  // If an album is provided in 'props', then we are editing an album.
  // Set album to the provided album and set newAlbumCreation to false.
  if (props?.title) {
    newMediaCreation = false;
    alertMessage = "edited";
  }

  const [title, setTitle] = useState(props?.title || "");
  const [type, setType] = useState(props?.type || "Movie");
  const [releaseDate, setReleaseDate] = useState(
    props?.releaseDate ? new Date(props.releaseDate) : new Date()
  );
  const [imgURL, setImgURL] = useState(props?.imgURL || "");

  const updateTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const updateType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value as "Movie" | "Series");
  };
  const updateReleaseDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = event.target.value;
    const dateObject = new Date(dateString);
    setReleaseDate(dateObject);
  };
  const updateImgURL = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImgURL(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      newMediaCreation
        ? await allMediaService.createAllMedia({
            title,
            type: type as "Movie" | "Series",
            releaseDate: releaseDate.toISOString().split("T")[0],
            imgURL,
          })
        : await allMediaService.editAllMediaById({
            id: props?.id,
            title,
            type: type as "Movie" | "Series",
            releaseDate: releaseDate.toISOString().split("T")[0],
            imgURL,
          });
      // Clear form fields after successful submission
      setTitle("");
      setType(type);
      setReleaseDate(new Date());
      alert(`Media ${alertMessage} successfully!`);
    } catch (error) {
      console.error("Error adding media:", error);
      alert("Failed to add media. Please try again.");
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
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
        <button type="submit" className="btn btn-primary">
          Add Media
        </button>
      </form>
    </div>
  );
};

export default AdminMedia;
