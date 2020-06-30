import * as APIUtil from '../util/tag_api.util';

export const RECEIVE_TAGS = 'RECEIVE_TAGS';
export const RECEIVE_TAG = 'RECEIVE_TAG';

const receiveTags = tags => {
  return {
    type: RECEIVE_TAGS,
    tags,
  };
};

const receiveTag = tag => {
  return {
    type: RECEIVE_TAG,
    tag,
  };
};

export const fetchTags = () => dispatch => (
  APIUtil.fetchTags().then(tags => dispatch(receiveTags(tags)))
);

export const fetchTag = (tagId) => dispatch => (
  APIUtil.fetchTag(tagId).then(tag => dispatch(receiveTag(tag)))
);