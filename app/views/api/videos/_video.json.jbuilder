json.extract! video, :id, :title, :description, :year, :created_at, :updated_at
json.url api_video_url(video, format: :json)

if video.image.attached?
  json.image_url url_for(video.image)
end
