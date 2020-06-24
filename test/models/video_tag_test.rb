# == Schema Information
#
# Table name: video_tags
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  tag_id     :bigint
#  video_id   :bigint
#
# Indexes
#
#  index_video_tags_on_tag_id    (tag_id)
#  index_video_tags_on_video_id  (video_id)
#
# Foreign Keys
#
#  fk_rails_...  (tag_id => tags.id)
#  fk_rails_...  (video_id => videos.id)
#
require 'test_helper'

class VideoTagTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
