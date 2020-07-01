import { connect } from "react-redux";
import Footer from "./footer";
import { withRouter } from 'react-router-dom';

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.id),
  user: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
});

export default withRouter(connect(mSTP, mDTP)(Footer));