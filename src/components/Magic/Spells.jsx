import { useEffect, useContext } from "react";
import "./style.css";
import { GlobalContext } from "../../context/Context";

const Spells = () => {
  const { spellList, fetchSpells, isLoading } = useContext(GlobalContext);

  useEffect(() => {
    fetchSpells();
  }, []);

  if (isLoading)
    return (
      <h1 style={{ textAlign: "center" }}>Fetching data..... Please wait!</h1>
    );

  return (
    <div className="sp">
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        All Spells In Harry Potter
      </h2>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {spellList && spellList.length > 0 ? (
          spellList.map((spell) => (
            <li
              key={spell.id}
              style={{
                flex: "1 1 calc(25% - 20px)",
                border: "1px solid grey",
                borderRadius: "5px",
                margin: "10px",
                padding: "15px",
                textAlign: "center",
                backgroundColor: "#f2f2f2",
              }}
            >
              <span>
                <b>Spell:</b> {spell.name}
              </span>
              <br />
              <br />
              <span>
                <b>Description:</b> {spell.description}
              </span>
            </li>
          ))
        ) : (
          <h2>No data found! Please try again</h2>
        )}
      </ul>
    </div>
  );
};

export default Spells;
