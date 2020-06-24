import { connect } from "react-redux";
import Home from './home';
import React from 'react';
import { fetchTags } from '../../actions/tag_actions';
import { fetchVideos } from '../../actions/video_actions';

const mSTP = state => ({
    tags: Object.values(state.entities.tags),
    videos: Object.values(state.entities.videos)
})

const mDTP = (dispatch) => ({
  fetchTags: () => dispatch(fetchTags()),
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(mSTP, mDTP)(Home);