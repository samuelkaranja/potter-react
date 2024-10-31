import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import hp from "../../assets/images/hp.jpg";
import "./style.css";
import { GlobalContext } from "../../context/Context";

const StaffDetails = () => {
  const { staffList, fetchStaff, isLoading } = useContext(GlobalContext);

  useEffect(() => {
    fetchStaff();
  }, []);

  const params = useParams();

  const { id } = params;

  const staffDetails = staffList.find((staff) => staff.id === id);

  if (isLoading)
    return (
      <h2 style={{ textAlign: "center" }}>Fetching data..... Please wait!</h2>
    );

  return (
    <div className="more">
      <p>
        <Link
          to="/staff"
          style={{ color: "black", textDecoration: "underline" }}
        >
          Back
        </Link>
      </p>
      <br />
      {staffDetails && (
        <div className="detail">
          <div className="image">
            {staffDetails?.image ? (
              <img src={staffDetails.image} alt={staffDetails.name} />
            ) : (
              <img src={hp} alt={staffDetails.name} />
            )}
          </div>
          <div className="info">
            <p>
              <b>Actor: </b>
              {staffDetails.actor}
            </p>
            <p>
              <b>Character: </b>
              {staffDetails.name}
            </p>
            <p>
              <b>DOB: </b>
              {staffDetails.dateOfBirth}
            </p>
            <p>
              <b>Gender: </b>
              {staffDetails.gender}
            </p>
            <p>
              <b>Wizard: </b>
              {staffDetails.wizard}
            </p>
            <p>
              <b>House: </b>
              {staffDetails.house}
            </p>
            <p>
              <b>Ancestry: </b>
              {staffDetails.ancestry}
            </p>
            <p>
              <b>Wand: </b>
              {staffDetails.wand.core}
            </p>
            <p>
              <b>Patronus: </b>
              {staffDetails.patronus}
            </p>
            <p>
              <b>Species: </b>
              {staffDetails.species}
            </p>
            <p>
              <b>Other Names: </b>
              {staffDetails.alternate_names.length > 0
                ? staffDetails.alternate_names[0]
                : "None"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDetails;
