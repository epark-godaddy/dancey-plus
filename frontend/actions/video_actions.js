import * as APIUtil from '../util/video_api.util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

const receiveVideos = videos => {
  return {
    type: RECEIVE_VIDEOS,
    videos,
  };
};


const receiveVideo = (video) => {
  return {
    type: RECEIVE_VIDEO,
    video
  };
};

export const fetchVideos = () => dispatch => (
  APIUtil.fetchVideos()
    .then(videos => dispatch(receiveVideos(videos)))
);

export const fetchVideo = (videoId) => dispatch => (
  APIUtil.fetchVideo(videoId)
    .then(video => dispatch(receiveVideo(video)))
);