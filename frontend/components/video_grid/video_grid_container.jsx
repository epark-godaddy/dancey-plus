import { connect } from "react-redux";
import VideoGrid from "./video_grid";



const mSTP = (state) => ({
  // videos: Object.values(state.entities.videos)
});

const mDTP = (dispatch) => ({});


export default connect(mSTP, mDTP)(VideoGrid);