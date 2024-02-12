import { NavLink } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import CloseHamburger from "./CloseHamburger";
function NavLinks() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active-link" : "custom-link")}
      >
        Home
      </NavLink>
      <NavLink
        to="doctor"
        className={({ isActive }) => (isActive ? "active-link" : "custom-link")}
      >
        Find a doctor
      </NavLink>
      <NavLink
        to="apps"
        className={({ isActive }) => (isActive ? "active-link" : "custom-link")}
      >
        Apps
      </NavLink>
      <NavLink
        to="testimonials"
        className={({ isActive }) => (isActive ? "active-link" : "custom-link")}
      >
        Testimonials
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) => (isActive ? "active-link" : "custom-link")}
      >
        About us
      </NavLink>
    </>
  );
}

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  function toogleMenu() {
    setIsOpen((flag) => !flag);
  }
  return (
    <>
      <nav>
        <ul className="hidden md:flex gap-x-10">
          <NavLinks />
        </ul>
        <div className="md:hidden">
          <button onClick={toogleMenu}>
            {isOpen ? <CloseHamburger /> : <HamburgerMenu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <ul className="flex flex-col items-center basis-full">
          <NavLinks />
        </ul>
      )}
    </>
  );
}

export default NavMenu;
