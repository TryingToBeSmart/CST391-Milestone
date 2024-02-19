import { useState } from "react";
import DisplayMedia from "../DisplayMedia";
import AdminMedia from "./AdminMedia";
import { Media } from "../../interfaces/Media";

const AdminDisplay = () => {
  const [showAdminMedia, setShowEditComponent] = useState(false); // State variable to track whether to show the edit component
  const [mediaItem, setMediaItem] = useState<Media | null>(null);

  const handleEditClick = (media: Media) => {
    setShowEditComponent(true); // Set showAdminMedia to true when Edit is clicked
    setMediaItem(media);
  };

  const handleNewClick = () => {
    setShowEditComponent(true); // Set showAdminMedia to true when New is clicked
  };

  const handleCancelClick = () => {
    setShowEditComponent(false);
  };

  return (
    <>
      <h1>Admin Display</h1>
      {showAdminMedia && (
        <div className="container">
          <div className="admin-container">
            <AdminMedia
              media={mediaItem}
              onCancel={handleCancelClick} // Conditionally display AdminMedia if showEditComponent is true
            />
          </div>
        </div>
      )}
      <div>
        <button className="btn btn-success container" onClick={handleNewClick}>
          Add New Media
        </button>
      </div>
      <div>
        <DisplayMedia
          buttonText="Edit"
          onClick={handleEditClick} // Pass the click event handler function to DisplayMedia
        />
      </div>
    </>
  );
};

export default AdminDisplay;
