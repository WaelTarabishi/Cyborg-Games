import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/imgs/logo.png";
import Navitme from "../../Components/Navitem/Navitem";
const Header = () => {
  return (
    <div className="navbar navbar-expand-md  navbar-dark  cyborg-navbar  ">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <Navitme>
              <Link to="/" className="nav-link">
                {" "}
                Home
              </Link>
            </Navitme>
            <Navitme>
              <a href="/#" className="nav-link">
                Browse
              </a>
            </Navitme>

            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Details
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#learn" className="dropdown-item">
                    Fortnite
                  </a>
                </li>
                <li>
                  <a href="#next" className="dropdown-item">
                    csgo
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#faq" className="nav-link">
                Streams
              </a>
            </li>
            <li className="nav-item">
              <Link to="Profile" className="nav-link">
                {" "}
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
