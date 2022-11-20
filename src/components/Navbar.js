import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleTransition = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleTransition);

    return () => {
      window.removeEventListener("scroll", handleTransition);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          alt=""
          onClick={() => navigate("/")}
        />
        <img
          className="nav__avatar"
          src="https://th.bing.com/th/id/R.1b9f68e6b02f27c74d4c3de19b6c6e46?rik=CNAXqHFL7GmaAg&pid=ImgRaw&r=0"
          alt=""
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
}

export default Navbar;
