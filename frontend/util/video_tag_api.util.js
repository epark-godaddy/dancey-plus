export const fetchVideoTags = () => (
  $.ajax({
    method: 'GET',
    url: '/api/video_tags',
  })
);