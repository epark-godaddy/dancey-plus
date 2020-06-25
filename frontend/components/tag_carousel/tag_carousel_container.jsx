import { connect } from "react-redux";
import TagCarousel from './tag_carousel';

const getVideoIds = (tagId, videoTags) => {
  const videoIds = [];
  videoTags.map(videoTag => {
    if (videoTag.tag_id === tagId) {
      videoIds.push(videoTag.video_id);
    }
  });
  return videoIds;
};

const getVideos = (videoIds, videos) => {
  return videos.filter(video => videoIds.includes(video.id));
};

const getVideosFromTag = (tag, videoTags, videos) => {
  const videoIds = getVideoIds(tag.id, videoTags);
  return getVideos(videoIds, videos);
};

// const state = {
//   entities: {
//     videos: {
//       '1': { id: 1, title: 'hip hop 1' },
//       '2': { id: 2, title: 'hip hop 2' },
//       '3': { id: 3, title: 'hip hop 3' },
//       '4': { id: 4, title: 'hip hop 4' }
//     },
//     videoTags: {
//       '100': { id: '100', video_id: 1, tag_id: 1 },
//       '101': { id: '102', video_id: 2, tag_id: 1 },
//       '102': { id: '102', video_id: 3, tag_id: 1 },
//       '103': { id: '103', video_id: 4, tag_id: 1 },
//     },
//     tags: { '1': { id: '1', name: 'hip hop' } }
//   }
// };

const mSTP = (state, ownProps) => ({
  videos: getVideosFromTag(ownProps.tag, Object.values(state.entities.videoTags), Object.values(state.entities.videos))
});

const mDTP = (dispatch) => ({});

export default connect(mSTP, mDTP)(TagCarousel);