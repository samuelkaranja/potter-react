import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [staffList, setStaffList] = useState([]);
  const [characterList, setCharacterList] = useState([]);
  const [spellList, setSpellList] = useState([]);
  const [ravenClawList, setRavenClawList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  // Fetching all staff members in Harry Potter

  const fetchStaff = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        "https://hp-api.onrender.com/api/characters/staff"
      );
      const response = await data.json();
      console.log(response);

      if (response) {
        setStaffList(response);
        setIsLoading(false);
      } else {
        setStaffList([]);
        setIsLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetching all characters in Harry Potter

  const fetchCharacters = async () => {
    try {
      setIsLoading(true);
      const data = await fetch("https://hp-api.onrender.com/api/characters");
      const response = await data.json();
      console.log(response.slice(0, 40));
      if (response) {
        setCharacterList(response.slice(0, 30));
        setIsLoading(false);
      } else {
        setCharacterList([]);
        setIsLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetching all spells in Harry Potter

  const fetchSpells = async () => {
    try {
      setIsLoading(true);
      const data = await fetch("https://hp-api.onrender.com/api/spells");
      const response = await data.json();
      console.log(response.name);

      if (response) {
        setSpellList(response);
        setIsLoading(false);
      } else {
        setSpellList([]);
        setIsLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetching all members of House Raven Claw in Harry Potter

  const fetchRavenClaw = async () => {
    try {
      setIsLoading(true);
      const data = await fetch(
        "https://hp-api.onrender.com/api/characters/house/ravenclaw"
      );
      const response = await data.json();
      console.log(response);

      if (response) {
        setRavenClawList(response);
        setIsLoading(false);
      } else {
        setRavenClawList([]);
        setIsLoading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        staffList,
        isLoading,
        fetchStaff,
        characterList,
        fetchCharacters,
        spellList,
        fetchSpells,
        ravenClawList,
        fetchRavenClaw,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
