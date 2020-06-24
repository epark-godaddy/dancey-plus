# json.array! @user_saved_videos, partial: "api/user_saved_videos/user_saved_video", as: :user_saved_video
@@user_saved_videos.each do |user_saved_video|
    json.set! user_saved_video.id do
        json.partial! 'api/user_saved_videos/user_saved_video', user_saved_video: user_saved_video
    end
end