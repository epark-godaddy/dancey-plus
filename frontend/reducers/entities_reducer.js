
import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tagsReducer from './tags_reducer';
import videosReducer from './videos_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  tags: tagsReducer,
  videos: videosReducer,
});


export default entitiesReducer;