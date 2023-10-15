import React, {useRef, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import logo from "./img/cart.png";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
  const navRef = useRef();
  const [ btn, setBtn ] = useState(true);

  const [{ basket, user }, dispatch] = useStateValue();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
    {btn ? setBtn(false) : setBtn(true)};
  } 

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
        />
      </Link>

      <div className="header__nav" ref={navRef}>
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option" onClick={showNavBar}>
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        
        <Link to='#'>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        </Link>


        <Link to="/checkout">
          <div className="header__optionBasket" onClick={showNavBar}>
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
      </div>
      <div className="hamburger nav-btn nav-close-btn"  onClick={showNavBar}>
          {btn ? <MenuRoundedIcon/> : <CloseIcon/> }
      </div>
    </div>
  );
}

export default Header;
