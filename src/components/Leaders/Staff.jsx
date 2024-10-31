import { useContext, useEffect } from "react";
import harry from "../../assets/images/harry.jpg";
import { Link } from "react-router-dom";

import "./style.css";
import { GlobalContext } from "../../context/Context";

const Staff = () => {
  const { staffList, isLoading, fetchStaff } = useContext(GlobalContext);

  useEffect(() => {
    fetchStaff();
  }, []);

  if (isLoading)
    return (
      <h1 style={{ textAlign: "center" }}>Fetching data..... Please wait!</h1>
    );

  return (
    <div className="staff">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        All Staff In Harry Potter
      </h2>
      <ul>
        {staffList && staffList.length > 0 ? (
          staffList.map((staff) => (
            <li key={staff.id}>
              <div className="image">
                <Link to={`${staff.id}/`}>
                  {staff.image ? (
                    <img src={staff?.image} />
                  ) : (
                    <img src={harry} />
                  )}
                </Link>
              </div>
              <span>
                <b>Actor: </b>
                {staff.name}
              </span>
              <br />
              <span>
                <b>Character: </b>
                {staff.actor}
              </span>
              <br />
              {/* <Link>More</Link> */}
            </li>
          ))
        ) : (
          <h1>No data!</h1>
        )}
      </ul>
    </div>
  );
};

export default Staff;
