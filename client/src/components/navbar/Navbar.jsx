import { ArrowDropDown, Search,RateReviewOutlined } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";
const Navbar = ({onSearch}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const [searchValue, setSearchValue] = useState('');
  const [showInput, setShowInput] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleClick = () => {
    setShowInput(true);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    onSearch(value);
  };
  return (
    <div className={isScrolled ? "navbar1 scrolled1" : "navbar1"}>
      <div className="container1">
        <div className="left1">
          <img
            src="https://i.ibb.co/xskVQgR/flixhub.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
        </div>
        <div className="right1">
        {showInput && (<input type="text" name="moviesearch" id="moviesearch" className="transparentSearchBar" onChange={handleSearchChange}/>)}
          <Search className="icon1" onClick={handleClick} />
          <span>{JSON.parse(localStorage.getItem("user")).username}</span>
          <Link to="/feedbacks">
          <RateReviewOutlined className="icon1"/>
          </Link>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profile1">
            <ArrowDropDown className="icon1"
            />
            <div className="options1">
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
