import * as APIUtil from '../util/video_api.util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';

const receiveVideos = videos => {
  return {
    type: RECEIVE_VIDEOS,
    videos,
  };
};

export const fetchVideos = () => dispatch => (
  APIUtil.fetchVideos()
  .then(videos => dispatch(receiveVideos(videos)))
);