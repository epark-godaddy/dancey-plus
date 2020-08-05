export const createUserSavedVideo = (videoId) =>
  $.ajax({
    method: "POST",
    url: "/api/user_saved_videos",
    data: { user_saved_video: { video_id: videoId } },
  });

export const removeVideoFromWatchlist = (videoId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/user_saved_videos/${videoId}`,
  });

export const fetchWatchlistVideos = () =>
  $.ajax({
    method: "GET",
    url: "/api/user_saved_videos",
  });
