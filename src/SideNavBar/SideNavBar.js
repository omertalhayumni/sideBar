import React from "react";
import "./SideNavBar.css";
import { useState } from "react";

const SideNavBar = () => {
  const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Dashboard",
      icon: "icons/grid.svg",
    },
    {
      text: "Admin Profile",
      icon: "icons/user.svg",
    },
    {
      text: "Messages",
      icon: "icons/message.svg",
    },
    {
      text: "Analytics",
      icon: "icons/pie-chart.svg",
    },
    {
      text: "File Manager",
      icon: "icons/folder.svg",
    },
    {
      text: "Orders",
      icon: "icons/shopping-cart.svg",
    },
    {
      text: "Saved Items",
      icon: "icons/heart.svg",
    },
    {
      text: "Settings",
      icon: "icons/settings.svg",
    },
  ];

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
          {isExpanded && (
            <div className="nav-brand">
              <img src="../../public/icons/Logo.svg" alt="logo" />
              <h2
                className={isExpanded ? "h2heading" : "h2heading h2heading-NX"}
              >
                Merhaba
              </h2>
            </div>
          )}
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
        <div className="nav-menu">
          {menuItems.map(({ text, icon }) => (
            <a
              className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
              href="#"
            >
              <img className="menu-item-icon" src={icon} alt="" srcset="" />
              {isExpanded && <p>{text}</p>}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-footer">
        <img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
      </div>
    </div>
  );
};

export default SideNavBar;
