import React from "react";
import "./Header.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const navigateToProjects = () => {
    navigate("/Projects");
  };
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToAbout = () => {
    navigate("/About");
  };
  return (
    <div className="header_master">
      <h1 className="my_name" onClick={navigateToHome}>
        Connor <span className="last_name">Prentice</span>
      </h1>
      <h2 className="my_job">Software Engineer</h2>
      <div className="button_align">
        <Button href="https://www.linkedin.com/in/connor-prentice-a6527219a/" variant="primary">
          LinkedIn
        </Button>{" "}
        <Button href="https://github.com/cprentice9" variant="dark">
          GitHub
        </Button>{" "}
        <Button variant="danger" onClick={navigateToProjects}>
          Projects
        </Button>{" "}
        <Button variant="warning" onClick={navigateToAbout}>
          aboutMe
        </Button>{" "}
        <Button variant="info">Resume</Button>{" "}
      </div>
    </div>
  );
}

export default Header;
