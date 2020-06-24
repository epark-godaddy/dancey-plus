# json.array! @video_tags, partial: "api/video_tags/video_tag", as: :video_tag
@video_tags.each do |video_tag|
    json.set! video_tag.id do
        json.partial! 'api/video_tags/video_tag', video_tag: video_tag
    end
end