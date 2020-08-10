import { connect } from "react-redux";
import Search from "./search";
import { fetchTags } from "../../actions/tag_actions";
import { fetchVideos } from "../../actions/video_actions";
import { fetchVideoTags } from "../../actions/video_tag_actions";
import { fetchWatchlistVideos } from "../../actions/watchlist_actions";

const mSTP = (state) => ({
  videos: Object.values(state.entities.videos),
  tags: Object.values(state.entities.tags),
  videoTags: Object.values(state.entities.videoTags),
});

const mDTP = (dispatch) => ({
  fetchTags: () => dispatch(fetchTags()),
  fetchVideos: () => dispatch(fetchVideos()),
  fetchVideoTags: () => dispatch(fetchVideoTags()),
  fetchWatchlistVideos: () => dispatch(fetchWatchlistVideos()),
});

export default connect(mSTP, mDTP)(Search);
