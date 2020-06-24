require 'test_helper'

class VideoTagsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @video_tag = video_tags(:one)
  end

  test "should get index" do
    get video_tags_url
    assert_response :success
  end

  test "should get new" do
    get new_video_tag_url
    assert_response :success
  end

  test "should create video_tag" do
    assert_difference('VideoTag.count') do
      post video_tags_url, params: { video_tag: { tag_id: @video_tag.tag_id, video_id: @video_tag.video_id } }
    end

    assert_redirected_to video_tag_url(VideoTag.last)
  end

  test "should show video_tag" do
    get video_tag_url(@video_tag)
    assert_response :success
  end

  test "should get edit" do
    get edit_video_tag_url(@video_tag)
    assert_response :success
  end

  test "should update video_tag" do
    patch video_tag_url(@video_tag), params: { video_tag: { tag_id: @video_tag.tag_id, video_id: @video_tag.video_id } }
    assert_redirected_to video_tag_url(@video_tag)
  end

  test "should destroy video_tag" do
    assert_difference('VideoTag.count', -1) do
      delete video_tag_url(@video_tag)
    end

    assert_redirected_to video_tags_url
  end
end
