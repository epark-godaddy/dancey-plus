require 'test_helper'

class UserSavedVideosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user_saved_video = user_saved_videos(:one)
  end

  test "should get index" do
    get user_saved_videos_url
    assert_response :success
  end

  test "should get new" do
    get new_user_saved_video_url
    assert_response :success
  end

  test "should create user_saved_video" do
    assert_difference('UserSavedVideo.count') do
      post user_saved_videos_url, params: { user_saved_video: { user_id: @user_saved_video.user_id, video_id: @user_saved_video.video_id } }
    end

    assert_redirected_to user_saved_video_url(UserSavedVideo.last)
  end

  test "should show user_saved_video" do
    get user_saved_video_url(@user_saved_video)
    assert_response :success
  end

  test "should get edit" do
    get edit_user_saved_video_url(@user_saved_video)
    assert_response :success
  end

  test "should update user_saved_video" do
    patch user_saved_video_url(@user_saved_video), params: { user_saved_video: { user_id: @user_saved_video.user_id, video_id: @user_saved_video.video_id } }
    assert_redirected_to user_saved_video_url(@user_saved_video)
  end

  test "should destroy user_saved_video" do
    assert_difference('UserSavedVideo.count', -1) do
      delete user_saved_video_url(@user_saved_video)
    end

    assert_redirected_to user_saved_videos_url
  end
end
