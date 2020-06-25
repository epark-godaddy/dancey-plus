import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logout } from "../../actions/session_actions";

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.id)
});

const mDTP = (dispatch) => ({
  logOut: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(NavBar);