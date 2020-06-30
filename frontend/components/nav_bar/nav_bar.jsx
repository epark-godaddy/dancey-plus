import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {

  render() {
    if (!this.props.loggedIn) return null;
    if (this.props.location.pathname.includes("videos")) return null;

    return (
      <div>
        <div className="nav-bar-spacing"></div>
        <div className="nav-bar-container">
          <div className="nav-bar-links-container">
            <Link to="/home" className="logo"></Link>
            <Link to="/home" className="link">
              <svg alt="" aria-hidden="true" aria-label="home" color="#ffffff" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="HOME" className="sc-cSHVUG fPNrHk" style={{ height: '24px', minWidth: '24px', width: '24px', zIndex: 'auto', fill: '#ffffff' }}>
                <path d="M26.882 19.414v10.454h-5.974v-5.227h-5.974v5.227H8.961V19.414H5.227L17.921 6.72l12.694 12.694h-3.733z" className="sc-jzJRlG dPjNeY"></path>
              </svg>
              HOME</Link>
            <Link to="/search" className="link">
              <svg aria-hidden="true" aria-label="search" color="#f9f9f9" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="SEARCH" className="sc-cSHVUG fPNrHk" style={{ height: '24px', minWidth: '24px', width: '24px', zIndex: 'auto', fill: '#ffffff' }}>
                <path d="M21.866 24.337c-3.933 2.762-9.398 2.386-12.914-1.13-3.936-3.936-3.936-10.318 0-14.255 3.937-3.936 10.32-3.936 14.256 0 3.327 3.327 3.842 8.402 1.545 12.27l4.56 4.558a2 2 0 010 2.829l-.174.173a2 2 0 01-2.828 0l-4.445-4.445zm-5.786-1.36a6.897 6.897 0 100-13.794 6.897 6.897 0 000 13.794z" className="sc-jzJRlG dPjNeY" />
              </svg>
              SEARCH</Link>
            <Link to="/watchlist" className="link">
              <svg alt="" aria-hidden="true" aria-label="watchlist" color="#f9f9f9" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" data-route="WATCHLIST" className="sc-cSHVUG fPNrHk" style={{ height: '24px', minWidth: '24px', width: '24px', zIndex: 'auto', fill: '#ffffff' }}>
                <path d="M27.85 15.1H20.9V8.15a2.9 2.9 0 0 0-5.8 0v6.95H8.15a2.9 2.9 0 0 0 0 5.8h6.95v6.95a2.9 2.9 0 0 0 5.8 0V20.9h6.95a2.9 2.9 0 1 0 0-5.8z" className="sc-jzJRlG dPjNeY"></path>
              </svg>
              WATCHLIST</Link>
          </div>
          <div className="drop-down">
            <button className="my-profile btn-secondary">My Profile</button>
            <div className="drop-down-content">
              <button className="edit-profile btn-secondary">Edit Profile</button>
              <button className="logout-button btn-secondary" onClick={this.props.logOut}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;