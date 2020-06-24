class CreateUserSavedVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :user_saved_videos do |t|
      t.references :user, foreign_key: true, index: true
      t.references :video, foreign_key: true, index: true

      t.timestamps
    end
  end
end
