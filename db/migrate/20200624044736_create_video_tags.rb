class CreateVideoTags < ActiveRecord::Migration[5.2]
  def change
    create_table :video_tags do |t|
      t.references :video, foreign_key: true, index: true
      t.references :tag, foreign_key: true, index: true

      t.timestamps
    end

  end
end
