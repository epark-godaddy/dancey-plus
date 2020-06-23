import React from 'react';


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
    this.props.action({...this.state});
  }
  update(field) { 
    return e => { 
      this.setState({[field]: e.currentTarget.value})
    }
  }

  render() { 
    const isSignUpForm = this.props.formType === 'Sign Up'
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {isSignUpForm && <div>Sign up with your email</div>}
          {!isSignUpForm && <div>Log in with your email</div>}
          <input
            type="text"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update('email')}
          />
          <input
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}
          />
          <input type="submit" value="CONTINUE"/>
        </form>
        {this.props.navLink}
      </div>
    )
  }
}

export default SessionForm; 