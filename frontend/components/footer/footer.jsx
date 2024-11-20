import React from "react";

class Footer extends React.Component {
  render() {
    // if (!this.props.loggedIn) return null;
    if (this.props.location.pathname.includes("videos")) return null;

    return (
      <div>
        <div className="footer-container-space"></div>
        <div className="footer-container">
          <div className="footer-links-container">
            <a
              href="https://www.linkedin.com/in/elishakutnick/"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href="https://github.com/epark-godaddy" target="_blank">
              GitHub
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
