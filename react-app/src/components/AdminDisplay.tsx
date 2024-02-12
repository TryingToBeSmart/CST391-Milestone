import AdminAddMedia from "./AdminAddMedia";
import AdminEditMedia from "./AdminEditMedia";

const AdminDisplay = () => {
  return (
    <>
      <h1>Admin Display</h1>

      <div className="container">
        <AdminAddMedia />
        <AdminEditMedia />
      </div>
    </>
  );
};

export default AdminDisplay;
