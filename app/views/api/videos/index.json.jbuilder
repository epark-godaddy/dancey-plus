# json.array! @videos, partial: "api/videos/video", as: :video
@videos.each do |video|
    json.set! video.id do
        json.partial! 'api/videos/video', video: video
    end
end

# { '1' : { title: 'thing', id: '1', created_at: ''} }