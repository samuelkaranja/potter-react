import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h2>
        <Link to="/staff">Harry Potter</Link>
      </h2>
      <ul>
        <li>
          <Link to="/staff">Staff</Link>
        </li>
        <li>
          <Link to="/characters">Characters</Link>
        </li>
        <li>
          <Link to="/spells">Spells</Link>
        </li>
        <li>
          <Link to="/raven-claw">RavenClaw</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
