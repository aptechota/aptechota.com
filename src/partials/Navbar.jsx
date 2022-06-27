import React from "react";
import AptechLogo from "../assets/images/aptech-logo.png";
import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <Navbar
      fluid={false}
      rounded={false}
      menuOpen={false}
      className=" fixed top-0 z-50 w-full bg-gray-200 shadow-sm sm:bg-white/95 sm:backdrop-blur-sm"
    >
      <Navbar.Brand href="/">
        <img
          src={AptechLogo}
          className="mr-3 h-6 sm:h-12 pointer-events-none"
          alt="Flowbite Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle className="" color="red" />
      <Navbar.Collapse className="items-center gap-2 space-y-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-aptechRed" : "inactive"
          }
          reloadDocument
        >
          <span className="navlink rounded-md font-bold hover:text-aptechRed">
            Home
          </span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-aptechRed" : "inactive"
          }
          reloadDocument
        >
          <span className="navlink rounded-md font-bold hover:text-aptechRed">
            About
          </span>
        </NavLink>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            isActive ? "text-aptechRed" : "inactive"
          }
          reloadDocument
        >
          <span className="navlink rounded-md font-bold hover:text-aptechRed">
            Courses
          </span>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-aptechRed" : "inactive"
          }
          reloadDocument
        >
          <span className="navlink rounded-md font-bold hover:text-aptechRed">
            Contact
          </span>
        </NavLink>
        <NavLink to="/contact" reloadDocument>
          <span className="hidden rounded-md border-2 border-aptechRed p-2 text-md font-bold text-aptechRed hover:bg-aptechRed hover:text-white md:inline">
            Enroll Now
          </span>
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
