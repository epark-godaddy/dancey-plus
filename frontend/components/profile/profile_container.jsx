import { connect } from 'react-redux';
import React from 'react';
import Profile from './profile';
import { Link } from 'react-router-dom';
import { update } from '../../actions/session_actions';



const mSTP = (state) => ({
  errors: state.errors.session,
  user: state.entities.users[state.session.id]
});


const mDTP = (dispatch) => ({
  action: (user) => dispatch(update(user))
});


export default connect(mSTP, mDTP)(Profile);