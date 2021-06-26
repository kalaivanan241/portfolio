import React from "react";
import "./NavBar.scss";
import { NavLink, Link } from "react-router-dom";
import SocialMediaIcon from "./../SocialMediaIcons/SocialMediaIcons";

const navigations = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/skills",
    name: "My Skillsets",
  },
  {
    to: "/experience",
    name: "My Experience",
  },
  {
    to: "/contact-me",
    name: "Contact Me",
  },
];

const NavList = ({ className, onNavClick }) => {
  const handleNavClick = () => {
    if (onNavClick) {
      onNavClick();
    }
  };
  return (
    <ul className={className}>
      {navigations.map((nav, index) => (
        <li className="nav__item" key={index}>
          <NavLink
            to={nav.to}
            className="nav__item__link"
            activeClassName="nav__item__active-link"
            exact
            onClick={handleNavClick}
          >
            {nav.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const MobileNavIcon = ({ onMenuClick, menuOpen }) => {
  return (
    <div className="nav__mobile-icon-container" onClick={onMenuClick}>
      <div
        className={!menuOpen ? "nav__mobile-icon" : "nav__mobile-icon-active"}
      ></div>
    </div>
  );
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenu = () => {
    setMenuOpen((val) => !val);
  };
  return (
    <nav className="nav">
      <div className="container nav__container">
        <Link to="/">
          <h1 className="nav__logo">KG</h1>
        </Link>
        <NavList className="nav__list" />
        <MobileNavIcon onMenuClick={handleMenu} menuOpen={menuOpen} />
      </div>
      {menuOpen && (
        <div className="nav__mobile-nav">
          <NavList className="nav__mobile-nav__list" onNavClick={handleMenu} />
          <SocialMediaIcon />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
