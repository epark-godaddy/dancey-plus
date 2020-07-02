import React from 'react';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  goToPage(path) {
    return () => {
      this.props.history.push(path);
    };
  }

  render() {
    return (
      <div className="splash-container">
        <div className="spash-container-left">
          <div className="signup-content">
            <div className='logo'></div>
            <button onClick={this.goToPage('/signup')} className="btn-primary">GET DANCEY+ FOR FREE</button>
            <button onClick={this.goToPage('/signup')} className="subscribe-button">or Subscribe to Dancey+ for $0/month or $0/year</button>
            <div className="dance-logos">
              <img className="image" src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/dancelogos.png" />
            </div>
          </div>
        </div>

        <div className="spash-container-right">
          <div className="login-content">
            <button onClick={this.goToPage('/login')} className="btn-secondary">LOG IN</button>
            <button onClick={this.props.login} className="btn-secondary">LOG IN AS DEMO USER</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash; 