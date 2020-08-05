import * as APIUtil from "../util/watchlist_api.util";

export const RECEIVE_WATCHLIST_VIDEO = "RECEIVE_WATCHLIST_VIDEO";
export const RECEIVE_ALL_WATCHLIST_VIDEOS = "RECEIVE_ALL_WATCHLIST_SHOWS";
export const REMOVE_WATCHLIST_VIDEO = "REMOVE_WATCHLIST_VIDEO";

const receiveWatchlistVideo = (userSavedVideo) => ({
  type: RECEIVE_WATCHLIST_VIDEO,
  userSavedVideo,
});

const receiveAllWatchlistVideos = (watchlistVideos) => ({
  type: RECEIVE_ALL_WATCHLIST_VIDEOS,
  watchlistVideos,
});

const removeWatchlistVideo = (videoId) => ({
  type: REMOVE_WATCHLIST_VIDEO,
  videoId,
});

export const addVideoToWatchlist = (videoId) => (dispatch) =>
  APIUtil.createUserSavedVideo(videoId).then((userSavedVideo) =>
    dispatch(receiveWatchlistVideo(userSavedVideo))
  );

export const removeVideoFromWatchlist = (videoId) => (dispatch) =>
  APIUtil.removeVideoFromWatchlist(videoId).then(() =>
    dispatch(removeWatchlistVideo(videoId))
  );

export const fetchWatchlistVideos = () => (dispatch) =>
  APIUtil.fetchWatchlistVideos().then((watchListVideos) =>
    dispatch(receiveAllWatchlistVideos(watchListVideos))
  );
