import React from "react";
import "./SideNavBar.css";
import { useState } from "react";

const SideNavBar = () => {
  const [isExpended, setExpendedState] = useState(false);

  return (
    <div className="side-bar-container">
      <div className="nav-upper">
        <div className="nav-heading">
          <div className="nav-brand">
            <img src="../../public/icons/Logo.svg" alt="logo" />
            <h2>SELF TECHNOLOGY</h2>
          </div>
          <button
            className={
              isExpended ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendedState(!isExpended)}
          >
            <div className="spann">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNavBar;
