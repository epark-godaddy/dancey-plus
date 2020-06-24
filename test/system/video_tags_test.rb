require "application_system_test_case"

class VideoTagsTest < ApplicationSystemTestCase
  setup do
    @video_tag = video_tags(:one)
  end

  test "visiting the index" do
    visit video_tags_url
    assert_selector "h1", text: "Video Tags"
  end

  test "creating a Video tag" do
    visit video_tags_url
    click_on "New Video Tag"

    fill_in "Tag", with: @video_tag.tag_id
    fill_in "Video", with: @video_tag.video_id
    click_on "Create Video tag"

    assert_text "Video tag was successfully created"
    click_on "Back"
  end

  test "updating a Video tag" do
    visit video_tags_url
    click_on "Edit", match: :first

    fill_in "Tag", with: @video_tag.tag_id
    fill_in "Video", with: @video_tag.video_id
    click_on "Update Video tag"

    assert_text "Video tag was successfully updated"
    click_on "Back"
  end

  test "destroying a Video tag" do
    visit video_tags_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Video tag was successfully destroyed"
  end
end
