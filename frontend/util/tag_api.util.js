export const fetchTags = () => (
  $.ajax({
    method: 'GET',
    url: '/api/tags',
  })
);

export const fetchTag = (tagId) => (
  $.ajax({
    method: 'GET',
    url: `/api/tags/${tagId}`,
  })
);