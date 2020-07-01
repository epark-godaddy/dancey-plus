import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logout } from "../../actions/session_actions";
import { withRouter } from 'react-router-dom';

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.id),
  user: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
  logOut: () => dispatch(logout())
});

export default withRouter(connect(mSTP, mDTP)(NavBar));