# == Schema Information
#
# Table name: user_saved_videos
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint
#  video_id   :bigint
#
# Indexes
#
#  index_user_saved_videos_on_user_id   (user_id)
#  index_user_saved_videos_on_video_id  (video_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#  fk_rails_...  (video_id => videos.id)
#
require 'test_helper'

class UserSavedVideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
