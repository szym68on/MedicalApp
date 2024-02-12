import { NavLink } from "react-router-dom";

function NavMenu() {
  return (
    <ul>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "custom-link")}
      >
        Home
      </NavLink>
      <NavLink to="doctor">Find a doctor</NavLink>
      <NavLink to="apps">Apps</NavLink>
      <NavLink to="testimonials">Testimonials</NavLink>
      <NavLink to="about">About us</NavLink>
    </ul>
  );
}

export default NavMenu;
