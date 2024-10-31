import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Page Not Found</h2>
      <Link to="/staff">Return Home</Link>
    </div>
  );
};

export default PageNotFound;
