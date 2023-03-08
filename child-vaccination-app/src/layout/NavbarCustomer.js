import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link,useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import Popup from 'reactjs-popup';
import { removeUserInfo } from '../components/UserInfo';

function NavbarCustomer() {

  const navigate = useNavigate();

  const logoutHandle = ()=>{
    removeUserInfo();
    navigate('/')
    window.location.reload(false)
}
  return (
    <nav className="navbar">
      <div className="navbar__logo">BABY VACCINE APPLICATION</div>
      <div className="navbar__menu">
        <div className="navbar__menu-item navbar__menu-item--active">
          <Link to="/">HOME</Link>
        </div>
        <div className="navbar__menu-item">
          <Link to="/profile">PROFILE</Link>
        </div>
        <div className="navbar__menu-item">
          <Link to="/customerVaccines">VACCINES</Link>
        </div>
        <div className="navbar__menu-item">
          <Link to="/customerBookings">BOOKINGS</Link>
        </div>
        <div className="navbar__menu-item">
          <Link to="/childDetails">CHILD-DETAILS</Link>
        </div>
        <div className="navbar__menu-item">
        <Popup
            trigger={<Link>LOGOUT</Link>}
            position="bottom center"
            modal
            closeOnDocumentClick
            contentStyle={{
              background: "#36393f",
              border: "none",
              borderColor: "ActiveBorder",
            }}
            className="custom-popup"
          >
            <div id="popText">
              Are you sure? Do you want to logout ?
            </div>
            <button
              className="btn btn-danger"
              onClick={logoutHandle}
            >
              Yes
            </button>
          </Popup>
        </div>
      </div>
      <FaBars className="navbar__hamburger" />
    </nav>
  );
}

export default NavbarCustomer;
