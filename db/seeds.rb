require 'open-uri'

#Demo User
User.create([{email: 'demo@gmail.com', password: 'password', name: 'Demo User'}])

# Tag seeds
hip_hop_tag = Tag.create([{name: 'Hip Hop'}])
ballet_tag = Tag.create([{name: 'Ballet'}])
jazz_funk_tag = Tag.create([{name: 'Jazz-Funk'}])
lyrical_tag = Tag.create([{name: 'Lyrical'}])
latin_tag = Tag.create([{name: 'Latin'}])

movie_tag = Tag.create([{name: 'Movies'}])
tutorial_tag = Tag.create([{name: 'Tutorials'}])
performance_tag = Tag.create([{name: 'Performances'}])
concept_video_tag = Tag.create([{name: 'Concept Videos'}])
television_show_tag = Tag.create([{name: 'Television Shows'}])
class_footage_tag = Tag.create([{name: 'Class Footage'}])


#Video Seeds 
video = Video.create(title: 'GRV 2nd Place | FRONTROW | World of Dance #WODLA 14')
img_file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/wod_grv.jpg')
video_file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/grv.mp4')
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag
video.tags << performance_tag
# link: https://www.youtube.com/watch?v=32Z377LiLVU


video = Video.create(title: 'TAKE ME UNDER - Sorah Yang')
img_file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/sorah-yang.jpg')
video_file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/TAKE+ME+UNDER+-+Sorah+Yang.mp4')
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag
video.tags << concept_video_tag
#link: https://www.youtube.com/watch?v=K6jNyw3rpgw

video = Video.create(title: 'Roddy Ricch - "The Box" Dance Tutorial w/ Matt Steffanina')
img_file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/the_box_tutorial.jpg')
video_file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/Roddy+Ricch+-++The+Box++Dance+Tutorial+w++Matt+Steffanina.mp4')
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag 
video.tags << tutorial_tag
#link: https://www.youtube.com/watch?v=znuvWedMmJ8&t=1s

video = Video.create(title: 'Yung Joc - It''s Goin Down | Choreography by Willdabeast Adams | @immaspace')
img_file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/wilda_going_down.jpg')
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/Yung+Joc+-+It's+Goin+Down+++Choreography+by+Willdabeast+Adams+++%40immaspace.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag
video.tags << class_footage_tag
#link: https://www.youtube.com/watch?v=9z8RONciuXw

video = Video.create(title: "KINJAZ 'Fear None' | ARENA CHINA 2017")
img_file = open('https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/kinjaz_fear_none.jpg')
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/KINJAZ++Fear+None++++ARENA+CHINA+2017.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag
video.tags << performance_tag
#link: https://www.youtube.com/watch?v=pxc_igMzxXY&t=1s

video = Video.create(title: "[World of Dance Performance] Takes On Missy Elliott's - Work It | The Lab")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/the_lab.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/%5BWorld+of+Dance+Performance%5D+Takes+On+Missy+Elliott's+-+Work+It+++The+Lab.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag
video.tags << television_show_tag
#link: https://www.youtube.com/watch?v=QR0GcryXE80


video = Video.create(title: "PILLS & AUTOMOBILES Chris Brown - Alexander Chung & CJ Salvador")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/pills_and_auto.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/PILLS+%26+AUTOMOBILES+Chris+Brown+-+Alexander+Chung+%26+CJ+Salvador.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag
video.tags << class_footage_tag
#link: https://www.youtube.com/watch?v=gAMjGfcUdNU

video = Video.create(title: "THE ROYAL FAMILY | Performance on ( World Of Dance) @Rihanna")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/royalfam.jgp.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/THE+ROYAL+FAMILY++++Performance+on+(+World+Of+Dance)+%40Rihanna.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag
video.tags << performance_tag
#link: https://www.youtube.com/watch?v=ArgRul_8gRU

video = Video.create(title: "'There Goes My Baby' - Keone Madrid choreography | Preface 13 of 15")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/keone.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/There+Goes+My+Baby++-+Keone+Madrid+choreography+++Preface+13+of+15.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag
video.tags << concept_video_tag
#link: https://www.youtube.com/watch?v=0XB6q8yhZsA

video = Video.create(title: "3 Simple Dance Moves for Beginners (Hip Hop Dance Moves Tutorial) | Mihran Kirakosian")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/tutorial1.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/3+Simple+Dance+Moves+for+Beginners+(Hip+Hop+Dance+Moves+Tutorial)+++Mihran+Kirakosian.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag
video.tags << tutorial_tag
#link: https://www.youtube.com/watch?v=ujREEgxEP7g


video = Video.create(title: "Beginner Tutting Combo (Dance Moves Tutorials) Poppin John")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/beginning_tutting.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/Beginner+Tutting+Combo+(Dance+Moves+Tutorials)+Poppin+John+++MihranTV+(%40MIHRANKSTUDIOS).mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag
video.tags << tutorial_tag
#link: https://www.youtube.com/watch?v=hBt4BU3CE4U


video = Video.create(title: "SUMMER WALKER 'come thru' || Candace Brown Choreography")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/candace_brown_summer_walker.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/SUMMER+WALKER++come+thru++++Candace+Brown+Choreography.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag
video.tags << tutorial_tag
#link: https://www.youtube.com/watch?v=qbO1kp3vdGY


video = Video.create(title: "[1st Place] SHINSA | ELEMENTS XIX 2019 [@VIBRVNCY 4K]")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/shinsa.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/%5B1st+Place%5D+SHINSA+++ELEMENTS+XIX+2019+%5B%40VIBRVNCY+4K%5D.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag
video.tags << performance_tag
#link: https://www.youtube.com/watch?v=AxrY0CIGRjQ


video = Video.create(title: "East Coast REMIX - A$AP Ferg Dance | Lyle Beniga Choreography | Field of Vision")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/lyle_eastcoast.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/East+Coast+REMIX+-+A%24AP+Ferg+Dance+++Lyle+Beniga+Choreography+++Field+of+Vision+++STEEZY.CO+(Adv).mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << hip_hop_tag
video.tags << concept_video_tag
#link: https://www.youtube.com/watch?v=AxrY0CIGRjQ

video = Video.create(title: "Blake McGrath - Missing You (Official Video)")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/missingyou.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/Blake+McGrath+-+Missing+You+(Official+Video).mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << lyrical_tag
video.tags << concept_video_tag
#link: https://www.youtube.com/watch?v=K_KcCCHCwJU


video = Video.create(title: "James Arthur - Recovery - Janelle Ginestra x Tim Milgram")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/recovery.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/James+Arthur+-+Recovery+-+Janelle+Ginestra+x+Tim+Milgram+-+%23Dance+%23TMillyTV.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << lyrical_tag
video.tags << concept_video_tag
#link: https://www.youtube.com/watch?v=AxrY0CIGRjQ


video = Video.create(title: "HARRY STYLES - Adore You | Kyle Hanagami Choreography")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/adore_you.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/HARRY+STYLES+-+Adore+You+++Kyle+Hanagami+Choreography.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << jazz_funk_tag
video.tags << class_footage_tag
#link: https://www.youtube.com/watch?v=JGXtLjvnurI


video = Video.create(title: "Ariana Grande - thank u, next | Choreography by Jojo Gomez Ft. Sean Lew, Kaycee Rice, Montana Tucker")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/thankyounext.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/Ariana+Grande+-+thank+u%2C+next+++Choreography+by+Jojo+Gomez+Ft.+Sean+Lew%2C+Kaycee+Rice%2C+Montana+Tucker.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << jazz_funk_tag
video.tags << class_footage_tag
#link: https://www.youtube.com/watch?v=B0ILbRWrnGA


video = Video.create(title: "Ballet Class For Beginners | How To Do Simple Ballet Moves With @MissAuti")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/balletclass.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/Ballet+Class+For+Beginners+++How+To+Do+Simple+Ballet+Moves+With+%40MissAuti.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << ballet_tag
video.tags << tutorial_tag
#link: https://www.youtube.com/watch?v=Uy67yin1ylI

video = Video.create(title: "Bachata Beginner Basic Steps Tutorial - Demetrio & Nicole - Bachata Dance Academy")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/bachata.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/Bachata+Beginner+Basic+Steps+Tutorial+-+Demetrio+%26+Nicole+-+Bachata+Dance+Academy.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << latin_tag
video.tags << tutorial_tag
#link: https://www.youtube.com/watch?v=xhrdh-uFkog

video = Video.create(title: "JONAS BROTHERS - Sucker | Kyle Hanagami Choreography")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/sucker.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/JONAS+BROTHERS+-+Sucker+++Kyle+Hanagami+Choreography.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << jazz_funk_tag
video.tags << class_footage_tag
#link: https://www.youtube.com/watch?v=WkhK2XJLJis

video = Video.create(title: "Magdalena, Mi Amor - DLG | Choreography with Lyrik Cruz")
img_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/images/magdalena.jpg")
video_file = open("https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/videos/Magdalena%2C+Mi+Amor+-+DLG+++Choreography+with+Lyrik+Cruz.mp4")
video.image.attach(io: img_file, filename:'this_videos_image.jpg')
video.video.attach(io: video_file, filename: 'this_videos_video.mp4')
video.tags << latin_tag
video.tags << class_footage_tag
#link: https://www.youtube.com/watch?v=qZ5O8IUTv1U









