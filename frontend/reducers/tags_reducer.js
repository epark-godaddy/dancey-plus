import { RECEIVE_TAGS, RECEIVE_TAG } from '../actions/tag_actions';

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TAGS:
      return action.tags;
    case RECEIVE_TAG:
      return { ...state.tags, [action.tag.id]: action.tag };
    default:
      return state;
  }
};

export default tagsReducer;