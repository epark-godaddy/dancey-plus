import {
  RECEIVE_WATCHLIST_VIDEO,
  RECEIVE_ALL_WATCHLIST_VIDEOS,
  REMOVE_WATCHLIST_VIDEO,
} from "../actions/watchlist_actions";

const userSavedVideosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_WATCHLIST_VIDEO:
      return { ...state, [action.userSavedVideo.id]: action.userSavedVideo };
    case RECEIVE_ALL_WATCHLIST_VIDEOS:
      return action.watchlistVideos;
    case REMOVE_WATCHLIST_VIDEO:
      const newState = { ...state };
      delete newState[action.videoId];
      return newState;
    default:
      return state;
  }
};

export default userSavedVideosReducer;
