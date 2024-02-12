import { useState } from "react";
import { createAllMedia } from "../apiServices/allMediaService";

const AdminAddMedia = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Movie");
  const [releaseDate, setReleaseDate] = useState(new Date());

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await createAllMedia({
        title,
        type: type as "Movie" | "Series",
        releaseDate: releaseDate.toISOString().split("T")[0],
      });
      // Clear form fields after successful submission
      setTitle("");
      setType("Movie");
      setReleaseDate(new Date());
      alert("Media added successfully!");
    } catch (error) {
      console.error("Error adding media:", error);
      alert("Failed to add media. Please try again.");
    }
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="Movie">Movie</option>
            <option value="Series">Series</option>
          </select>
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
            onChange={(e) => setReleaseDate(new Date(e.target.value))}
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

export default AdminAddMedia;
