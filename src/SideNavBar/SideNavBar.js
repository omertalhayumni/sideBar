import React from "react";
import "./SideNavBar.css";
import { useState } from "react";

const SideNavBar = () => {
  const [isExpanded, setExpendState] = useState(false);

  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          <div className="nav-brand">
            <img src="../../public/icons/Logo.svg" alt="logo" />
            <h2 className={isExpanded ? "h2heading" : "h2heading h2heading-NX"}>
              SELF TECHNOLOGY
            </h2>
          </div>
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpanded)}
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
