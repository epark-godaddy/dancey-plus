import { connect } from "react-redux";
import Thumbnail from "./thumbnail";
import {
  addVideoToWatchlist,
  removeVideoFromWatchlist,
} from "../../actions/watchlist_actions";

const getVideoIdsFromState = (state) => {
  return Object.values(state.entities.userSavedVideos).map(
    (userSavedVideo) => userSavedVideo.video_id
  );
};

const mSTP = (state) => ({
  userSavedVideoIds: getVideoIdsFromState(state),
});

const mDTP = (dispatch) => ({
  addVideoToWatchlist: (videoId) => dispatch(addVideoToWatchlist(videoId)),
  removeVideoFromWatchlist: (videoId) =>
    dispatch(removeVideoFromWatchlist(videoId)),
});

export default connect(mSTP, mDTP)(Thumbnail);
