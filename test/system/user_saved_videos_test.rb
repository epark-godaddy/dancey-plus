require "application_system_test_case"

class UserSavedVideosTest < ApplicationSystemTestCase
  setup do
    @user_saved_video = user_saved_videos(:one)
  end

  test "visiting the index" do
    visit user_saved_videos_url
    assert_selector "h1", text: "User Saved Videos"
  end

  test "creating a User saved video" do
    visit user_saved_videos_url
    click_on "New User Saved Video"

    fill_in "User", with: @user_saved_video.user_id
    fill_in "Video", with: @user_saved_video.video_id
    click_on "Create User saved video"

    assert_text "User saved video was successfully created"
    click_on "Back"
  end

  test "updating a User saved video" do
    visit user_saved_videos_url
    click_on "Edit", match: :first

    fill_in "User", with: @user_saved_video.user_id
    fill_in "Video", with: @user_saved_video.video_id
    click_on "Update User saved video"

    assert_text "User saved video was successfully updated"
    click_on "Back"
  end

  test "destroying a User saved video" do
    visit user_saved_videos_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "User saved video was successfully destroyed"
  end
end
