import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import tagsReducer from "./tags_reducer";
import videosReducer from "./videos_reducer";
import videoTagsReducer from "./video_tags_reducer";
import userSavedVideosReducer from "./user_saved_videos_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  tags: tagsReducer,
  videos: videosReducer,
  videoTags: videoTagsReducer,
  userSavedVideos: userSavedVideosReducer,
});

export default entitiesReducer;
