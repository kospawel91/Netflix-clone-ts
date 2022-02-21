import React, { useEffect, useState } from "react";
import "./nav.scss";

export const Nav = () => {
  const [handleScroll, setHandleScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHandleScroll(true);
      } else setHandleScroll(false);
    });
    return () => {
      window.removeEventListener("scroll", () => "");
    };
  }, []);

  return (
    <div className={`nav ${handleScroll && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix avatar"
      />
    </div>
  );
};
