# json.array! @videos, partial: "api/videos/video", as: :video
@videos.each do |video|
    json.set! video.id do
        json.partial! 'api/videos/video', video: video
    end
end