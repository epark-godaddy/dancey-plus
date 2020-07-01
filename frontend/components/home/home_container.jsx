import { connect } from "react-redux";
import Home from './home';
import React from 'react';
import { fetchTags } from '../../actions/tag_actions';
import { fetchVideos } from '../../actions/video_actions';
import { fetchVideoTags } from '../../actions/video_tag_actions';
import { withRouter } from 'react-router-dom';


const mSTP = state => ({
  tags: Object.values(state.entities.tags),
  videos: Object.values(state.entities.videos),
  videoTags: Object.values(state.entities.videoTags)
});

const mDTP = (dispatch) => ({
  fetchTags: () => dispatch(fetchTags()),
  fetchVideos: () => dispatch(fetchVideos()),
  fetchVideoTags: () => dispatch(fetchVideoTags())
});

export default withRouter(connect(mSTP, mDTP)(Home));