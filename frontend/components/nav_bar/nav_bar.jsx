import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {

  render() {
    if (!this.props.loggedIn) return null;

    return (
      <div>
        <div className='logo'></div>
        <Link to="/home">HOME</Link>
        <Link to="/search">SEARCH</Link>
        <Link to="/watchlist">WATCHLIST</Link>
        <button onClick={this.props.logOut} className="btn-secondary">LOG OUT</button>
      </div>
    );
  }
}

export default NavBar;