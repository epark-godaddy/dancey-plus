import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      id: this.props.user.id
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
    return (
      <div className='session-container'>
        <div className="session-content-container">
          <Link to="/" className="logo"></Link>
          <form onSubmit={this.handleSubmit}>
            <div className="text">Edit Profile</div>
            <div className="input-fields">
              <input className="text-input"
                type="text"
                placeholder="Profile Name"
                value={this.state.name}
                onChange={this.update('name')}
              />

              <div className="text-danger">
                {this.props.errors.join(' ')}
              </div>
              <input className="btn-primary session-submit" type="submit" value="SAVE" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Profile; 