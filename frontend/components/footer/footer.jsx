import React from 'react';



class Footer extends React.Component {

  render() {
    if (!this.props.loggedIn) return null;
    if (this.props.location.pathname.includes("videos")) return null;

    return (
      <div>
        <div className="footer-container">
          <div className="footer-links-container">
            <a href="https://www.linkedin.com/in/elishaspark/">LinkedIn</a>
            <a href="https://github.com/ElishaPark">Github</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;