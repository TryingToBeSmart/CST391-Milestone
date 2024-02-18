import DisplayMedia from "../DisplayMedia";
import AdminMedia from "./AdminMedia";
import AdminEditMedia from "./AdminEditMedia";

const AdminDisplay = () => {
  return (
    <>
      <h1>Admin Display</h1>
      <div className="container">
        <div className="admin-container container">
          <AdminMedia />
        </div>
        <div className="admin-container container">
          <AdminEditMedia />
        </div>
      </div>
      <div>
        <DisplayMedia></DisplayMedia>
      </div>
    </>
  );
};

export default AdminDisplay;
