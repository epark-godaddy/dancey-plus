
import { connect } from 'react-redux';
import React from 'react';
import Splash from './splash'
import { login } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state) => ({

})


const mDTP = (dispatch) => ({
  login: () => dispatch(login({email: 'demo@gmail.com', password:'password'}))
})

export default withRouter(connect(mSTP, mDTP)(Splash));