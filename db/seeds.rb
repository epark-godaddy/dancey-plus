# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([{email: 'demo@gmail.com', password: 'password'}])

# create all the tags

hip_hop_tag = Tag.create([{name: 'hip hop'}])
Tag.create([{name: 'ballet'}])
Tag.create([{name: 'jazz'}])
Tag.create([{name: 'tap'}])
Tag.create([{name: 'lyrical'}])
Tag.create([{name: 'ballroom'}])
Tag.create([{name: 'latin'}])
Tag.create([{name: 'jazz-funk'}])
Tag.create([{name: 'movie'}])
Tag.create([{name: 'tutorial'}])
Tag.create([{name: 'performance'}])
Tag.create([{name: 'show'}])
Tag.create([{name: 'class footage'}])
Tag.create([{name: 'miscl'}])

20.times do |num|
  video = Video.new
  video.title = "hip hop " + num.to_s
  video.tags << hip_hop_tag
  video.save
end

