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

export const getVideosFromTag = (tag, videoTags, videos) => {
  const videoIds = getVideoIds(tag.id, videoTags);
  return getVideos(videoIds, videos);
};

