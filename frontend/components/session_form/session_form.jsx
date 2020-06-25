import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action({ ...this.state });
  }
  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render() {
    const isSignUpForm = this.props.formType === 'Sign Up';
    return (
      <div className='session-container'>
        <div className="session-content-container">
          <Link to="/" className="logo"></Link>
          <form onSubmit={this.handleSubmit}>
            {isSignUpForm && <div className="text">Sign up with your email</div>}
            {!isSignUpForm && <div className="text">Log in with your email</div>}
            <div className="input-fields">
              <input className="text-input"
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update('email')}
              />
              <input className="text-input"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
              />
              <div className="text-danger">
                {this.props.errors.join(' ')}
              </div>
              <input className="btn-primary session-submit" type="submit" value="CONTINUE" />
            </div>

            <div className="reroute-message">
              {this.props.navLink}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm; 