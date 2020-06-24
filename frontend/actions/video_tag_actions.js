import * as APIUtil from '../util/video_tag_api.util';

export const RECEIVE_VIDEO_TAGS = 'RECEIVE_VIDEO_TAGS';

const receiveVideoTags = videoTags => {
  return {
    type: RECEIVE_VIDEO_TAGS,
    videoTags,
  };
};

export const fetchVideoTags = () => dispatch => (
  APIUtil.fetchVideoTags().then(videoTags => dispatch(receiveVideoTags(videoTags)))
);