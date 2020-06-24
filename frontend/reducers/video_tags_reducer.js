import { RECEIVE_VIDEO_TAGS } from '../actions/video_tag_actions' 

const videoTagsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VIDEO_TAGS:
      return action.videoTags;
    default:
      return state;
  }
};


export default videoTagsReducer;