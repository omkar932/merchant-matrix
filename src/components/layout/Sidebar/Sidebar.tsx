import React, { useRef } from "react";
import homeicon from "../../../assets/homeIcon.png";
import infoicon from "../../../assets/about.png";
import dashboard from "../../../assets/dashboard.png";
import contact from "../../../assets/contact.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isOpen = true;
  const menuRef = useRef(null);

  return (
    <aside className="bg-positive h-screen max-md:h-auto w-80 max-md:w-20 shadow-lg">
      <div className="flex justify-between items-center py-4 px-6">
        {/* <button
          className="text-white focus:outline-none lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 transform ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> */}
      </div>
      {/* Dropdown Menu */}
      <div ref={menuRef} className={`bg-accent  ${isOpen ? "" : "hidden"}`}>
        <ul className="text-white">
          <li>
            <Link
              to={"/"}
              className="py-4 flex pl-5 gap-3 items-center hover:bg-secondary transition-colors duration-300"
            >
              <img src={homeicon} className="h-fit" alt="home" />{" "}
              <div className="max-md:hidden">Home</div>
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard"
              className="py-4 flex pl-5 gap-3 items-center hover:bg-secondary transition-colors duration-300"
            >
              <img src={dashboard} className="h-fit" alt="Dashboard" />
              <div className="max-md:hidden">Dashboard</div>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="py-4 flex pl-5 gap-3 items-center hover:bg-secondary transition-colors duration-300"
            >
              <img src={infoicon} className="h-fit" alt="about" />{" "}
              <div className="max-md:hidden">About</div>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="py-4 flex pl-5 gap-3 items-center hover:bg-secondary transition-colors duration-300"
            >
              <img src={contact} className="h-fit" alt="Contact" />{" "}
              <div className="max-md:hidden">Contact</div>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
