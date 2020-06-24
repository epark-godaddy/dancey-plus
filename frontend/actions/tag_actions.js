import * as APIUtil from '../util/tag_api.util';

export const RECEIVE_TAGS = 'RECEIVE_TAGS'

const receiveTags = tags => {
  return {
    type: RECEIVE_TAGS,
    tags,
  }
}

export const fetchTags = () => dispatch => (
  APIUtil.fetchTags().then(tags => dispatch(receiveTags(tags)))
)