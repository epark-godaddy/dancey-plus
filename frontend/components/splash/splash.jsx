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
      <div className="splash-container">
        <div className="spash-container-left">
          <div className="signup-content">
            <div className='logo'></div>
            <button onClick={this.goToPage('/signup')} className="btn-primary">GET ALL THREE FOR $12.99/MONTH</button>
            <button onClick={this.goToPage('/signup')} className="subscribe-button">or Subscribe to just Dancey+ for $6.99/month or $69.99/year</button>
          </div>
        </div>

        <div className="spash-container-right">
          <div className="login-content">
            <button onClick={this.goToPage('/login')} className="btn-secondary">LOG IN</button>
            <button onClick={this.props.login} className="btn-secondary">LOG IN AS DEMO USER</button>
          </div>
        </div>
      </div>
    )
   }
}

export default Splash; 