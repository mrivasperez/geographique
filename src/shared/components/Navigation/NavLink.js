import { NavLink } from "react-router-dom";

import "./NavLink.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">All Users</NavLink>
        <NavLink to="/">My Places</NavLink>
        <NavLink to="/">Add Place</NavLink>
        <NavLink to="/">Login</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
