# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  description :text
#  title       :string           not null
#  year        :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_videos_on_title  (title)
#  index_videos_on_year   (year)
#
class Video < ApplicationRecord
  has_many :video_tags

  has_many :tags, through: :video_tags

  has_one_attached :image 

end
