import { connect } from "react-redux";
import Watchlist from "./watchlist";
import { fetchWatchlistVideos } from "../../actions/watchlist_actions";
import { fetchVideos } from "../../actions/video_actions";

const getVideosFromUserSavedVideos = (state) => {
  const userSavedVideoIds = Object.values(state.entities.userSavedVideos).map(
    (userSavedVideo) => userSavedVideo.video_id
  );

  return Object.values(state.entities.videos).filter((video) =>
    userSavedVideoIds.includes(video.id)
  );
};

const mSTP = (state) => ({
  videos: getVideosFromUserSavedVideos(state),
});

const mDTP = (dispatch) => ({
  fetchWatchlistVideos: () => dispatch(fetchWatchlistVideos()),
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mSTP, mDTP)(Watchlist);
