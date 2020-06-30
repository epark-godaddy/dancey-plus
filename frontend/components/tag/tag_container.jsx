import { connect } from "react-redux";
import { fetchTag } from "../../actions/tag_actions";
import { fetchVideos } from '../../actions/video_actions';
import { fetchVideoTags } from '../../actions/video_tag_actions';
import Tag from './tag';
import { getVideosFromTag } from '../../util/store_selector_util';

const mSTP = (state, ownProps) => ({
  tag: state.entities.tags[ownProps.match.params.id],
  videos: getVideosFromTag(
    state.entities.tags[ownProps.match.params.id],
    Object.values(state.entities.videoTags),
    Object.values(state.entities.videos)
  )
});

const mDTP = (dispatch) => ({
  fetchTag: (tagId) => dispatch(fetchTag(tagId)),
  fetchVideos: () => dispatch(fetchVideos()),
  fetchVideoTags: () => dispatch(fetchVideoTags())
});

export default connect(mSTP, mDTP)(Tag);