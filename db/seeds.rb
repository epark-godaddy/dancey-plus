# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

#Demo User
User.create([{email: 'demo@gmail.com', password: 'password'}])

# Tag seeds
hip_hop_tag = Tag.create([{name: 'hip hop'}])
Tag.create([{name: 'ballet'}])
Tag.create([{name: 'jazz-funk'}])
Tag.create([{name: 'tap'}])
Tag.create([{name: 'lyrical'}])
Tag.create([{name: 'ballroom'}])
Tag.create([{name: 'latin'}])
Tag.create([{name: 'movie'}])
tutorial_tag = Tag.create([{name: 'tutorial'}])
performance_tag = Tag.create([{name: 'performance'}])
concept_video = Tag.create([{name: 'concept video'}])
Tag.create([{name: 'show'}])
class_footage_tag = Tag.create([{name: 'class footage'}])
# Tag.create([{name: 'miscl'}])

#Video Seeds -- current: images
video = Video.create(title: 'GRV 2nd Place | FRONTROW | World of Dance #WODLA 14')
file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/wod_grv.jpg')
video.image.attach(io: file, filename:'this_videos_image.jpg')
video.tags << hip_hop_tag
video.tags << performance_tag

video = Video.create(title: 'TAKE ME UNDER - Sorah Yang')
file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/sorah-yang.jpg')
video.image.attach(io: file, filename:'this_videos_image.jpg')
video.tags << hip_hop_tag
video.tags << concept_video

video = Video.create(title: 'Roddy Ricch - "The Box" Dance Tutorial w/ Matt Steffanina')
file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/the_box_tutorial.jpg')
video.image.attach(io: file, filename:'this_videos_image.jpg')
video.tags << hip_hop_tag
video.tags << tutorial_tag

video = Video.create(title: 'Yung Joc - It''s Goin Down | Choreography by Willdabeast Adams | @immaspace')
file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/wilda_going_down.jpg')
video.image.attach(io: file, filename:'this_videos_image.jpg')
video.tags << hip_hop_tag
video.tags << class_footage_tag

video = Video.create(title: 'KINJAZ "Fear None" | ARENA CHINA 2017')
file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/kinjaz_fear_none.jpg')
video.image.attach(io: file, filename:'this_videos_image.jpg')
video.tags << hip_hop_tag
video.tags << performance_tag


