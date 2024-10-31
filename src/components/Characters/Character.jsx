import { useContext, useEffect } from "react";
import harry from "../../assets/images/harry.jpg";
import { GlobalContext } from "../../context/Context";

import "./style.css";

const Character = () => {
  const { characterList, fetchCharacters, isLoading } =
    useContext(GlobalContext);

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (isLoading)
    return (
      <h1 style={{ textAlign: "center" }}>Fetching data..... Please wait!</h1>
    );

  return (
    <div className="ch">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        All Characters In Harry Potter
      </h2>
      <ul>
        {characterList && characterList.length > 0 ? (
          characterList.map((character) => (
            <li key={character.id}>
              <div className="image">
                {character.image ? (
                  <img src={character?.image} />
                ) : (
                  <img src={harry} />
                )}
              </div>

              <span>
                <b>Actor:</b> {character?.actor}
              </span>
              <br />
              <span>
                <b>Character: </b>
                {character?.name}
              </span>
            </li>
          ))
        ) : (
          <h1>No data!</h1>
        )}
      </ul>
    </div>
  );
};

export default Character;
