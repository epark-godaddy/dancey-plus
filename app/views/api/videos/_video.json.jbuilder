json.extract! video, :id, :title, :description, :year, :created_at, :updated_at
if video.image.attached?
  json.image_url url_for(video.image)
end
if video.video.attached?
  json.video_url url_for(video.video)
end
