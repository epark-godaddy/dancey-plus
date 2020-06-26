import { connect } from "react-redux";
import { fetchVideo } from "../../actions/video_actions";
import Video from './video';


const mSTP = (state, ownProps) => ({
  video: state.entities.videos[ownProps.match.params.id]
});

const mDTP = (dispatch) => ({
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
});

export default connect(mSTP, mDTP)(Video);