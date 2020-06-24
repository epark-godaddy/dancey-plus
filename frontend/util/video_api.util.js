export const fetchVideos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/videos',
  })
);
