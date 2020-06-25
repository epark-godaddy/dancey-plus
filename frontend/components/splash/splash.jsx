import React from 'react';
// import logo from '../../../app/assets/images/logo.png'

class Splash extends React.Component { 
  constructor(props) { 
    super(props);
  }

  goToPage(path) {
    return () => { 
      this.props.history.push(path);
    }   
  }

  render() {
    return (
      <div className="row align-items-center splash-container">
        <div className="col-6">
          <div className="signup-content">
            {/* <img className="logo"src={logo} alt="logo"/> */}
            <button onClick={this.goToPage('/signup')} className="btn btn-primary">GET ALL THREE FOR $12.99/MONTH</button>
            <br/>
            <button onClick={this.goToPage('/signup')} className="subscribe-button">or Subscribe to just Dancey+ for $6.99/month or $69.99/year</button>
          </div>
        </div>

        <div className="col-6 d-flex justify-content-end align-self-start">
          <div className="login-content">
            <button onClick={this.goToPage('/login')} className="btn btn-secondary login-button">LOG IN</button>
            <br />
            <button onClick={this.props.login} className="btn btn-secondary login-button">LOG IN AS DEMO USER</button>
          </div>
        </div>
      </div>
    )
   }
}

export default Splash; 