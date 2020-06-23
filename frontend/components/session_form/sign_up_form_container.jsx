import { connect } from 'react-redux';
import React from 'react';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';


const mSTP = (state) => ({
  errors: state.errors.session,
  formType: 'Sign Up',
  navLink: <div>Already a member of Dancey+? <Link to="/login">Log In</Link></div>

})


const mDTP = (dispatch) => ({
  action: (user) => dispatch(signup(user))
})


export default connect(mSTP, mDTP)(SessionForm)