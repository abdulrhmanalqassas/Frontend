import React,{useState} from "react";
import brandIcon from "../images/blockchain.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Nav() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  return (
    <nav>
      <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      <h2 className="logo">
        KS<span>F</span>
      </h2>
      <ul className="desktop-ul">
        <Link to="/Verifi">
          <li className="li">VACCINE VERIFICATION</li>
        </Link>
        <Link to="/State">
          <li className="li">Change State</li>
        </Link>
        <Link to="/">
          <li className="li">Home</li>
        </Link>
      </ul>
      <Link to="/login">
      <p className="btn">log Out</p>
      </Link>
      <div className={menu_class}>
            <div>
              <Link onClick={updateMenu} to="/">
                HOME
              </Link>
              <Link onClick={updateMenu} to="/Verifi">
               Verify
              </Link>
              <Link onClick={updateMenu} to="/State">
              Change State
              </Link>
            </div>
          </div>
      
    </nav>
  );
}
