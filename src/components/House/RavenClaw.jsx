import { useContext, useEffect } from "react";
import harry from "../../assets/images/harry.jpg";
import "./style.css";
import { GlobalContext } from "../../context/Context";

const RavenClaw = () => {
  const { ravenClawList, fetchRavenClaw, isLoading } =
    useContext(GlobalContext);

  useEffect(() => {
    fetchRavenClaw();
  }, []);

  if (isLoading)
    return (
      <h1 style={{ textAlign: "center" }}>Fetching data..... Please wait!</h1>
    );

  return (
    <div className="rv">
      <h2 style={{ textAlign: "center" }}>
        All Members of the Raven Claw House
      </h2>
      <ul>
        {ravenClawList && ravenClawList.length > 0 ? (
          ravenClawList.map((raven) => (
            <li key={raven?.id}>
              <div className="image">
                {raven?.image ? (
                  <img src={raven?.image} alt={raven?.name} />
                ) : (
                  <img src={harry} alt={raven?.name} />
                )}
              </div>
              <span>
                <b>Actor: </b>
                {raven?.actor}
              </span>
              <br />
              <span>
                <b>Character: </b>
                {raven?.name}
              </span>
            </li>
          ))
        ) : (
          <h1>No data found! Please wait...</h1>
        )}
      </ul>
    </div>
  );
};

export default RavenClaw;
