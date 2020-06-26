require 'open-uri'

#Demo User
User.create([{email: 'demo@gmail.com', password: 'password'}])

# Tag seeds
hip_hop_tag = Tag.create([{name: 'Hip Hop'}])
ballet_tag = Tag.create([{name: 'Ballet'}])
jazz_funk_tag = Tag.create([{name: 'Jazz-Funk'}])
lyrical_tag = Tag.create([{name: 'Lyrical'}])
ballroom_tag = Tag.create([{name: 'Latin Ballroom'}])

movie_tag = Tag.create([{name: 'Movies'}])
tutorial_tag = Tag.create([{name: 'Tutorials'}])
performance_tag = Tag.create([{name: 'Performances'}])
concept_video_tag = Tag.create([{name: 'Concept Videos'}])
television_show_tag = Tag.create([{name: 'Television Shows'}])
class_footage_tag = Tag.create([{name: 'Class Footage'}])


#Video Seeds -- current: image, video
video = Video.create(title: 'GRV 2nd Place | FRONTROW | World of Dance #WODLA 14')
img_file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/wod_grv.jpg')
video_file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/grv.mp4')
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag
video.tags << performance_tag
# link: https://www.youtube.com/watch?v=32Z377LiLVU

video = Video.create(title: 'TAKE ME UNDER - Sorah Yang')
file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/sorah-yang.jpg')
video.image.attach(io: file, filename:'this_videos_image.jpg')
video.tags << hip_hop_tag
video.tags << concept_video_tag
#link: https://www.youtube.com/watch?v=K6jNyw3rpgw

video = Video.create(title: 'Roddy Ricch - "The Box" Dance Tutorial w/ Matt Steffanina')
file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/the_box_tutorial.jpg')
video.image.attach(io: file, filename:'this_videos_image.jpg')
video.tags << hip_hop_tag
video.tags << tutorial_tag
#link: https://www.youtube.com/watch?v=znuvWedMmJ8&t=1s

video = Video.create(title: 'Yung Joc - It''s Goin Down | Choreography by Willdabeast Adams | @immaspace')
file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/wilda_going_down.jpg')
video.image.attach(io: file, filename:'this_videos_image.jpg')
video.tags << hip_hop_tag
video.tags << class_footage_tag
#link: https://www.youtube.com/watch?v=9z8RONciuXw

video = Video.create(title: 'KINJAZ "Fear None" | ARENA CHINA 2017')
file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/kinjaz_fear_none.jpg')
video.image.attach(io: file, filename:'this_videos_image.jpg')
video.tags << hip_hop_tag
video.tags << performance_tag
#link: https://www.youtube.com/watch?v=pxc_igMzxXY&t=1s


