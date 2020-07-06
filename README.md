# README

# Dancey+

## Table of Contents
* Introduction
* Technologies
* Features

## Introduction
Welcome to Dancey+, a single page web application based on Disney+ and Netflix. Dancey+ allows registered users to browse dance-related videos and search for videos based on dance genre (Hip Hop, Ballet, Latin, Jazz-Funk, or Lyrical) and video category (performance, class footage, television show, concept video, or tutorial). 

## Technologies
* Ruby On Rails
* React / Redux
* AWS S3
* PostgreSQL
* Heroku

<h1 align="center">
  <img src="https://github.com/ElishaPark/dancey-plus/blob/master/app/assets/demos/walkthru.gif" width="600" height="auto" align="center"/>
</h1>


## Setup
To run this project on your own machine, clone it to your local machine and then run:
```
npm install
```
This will install all of the front end dependencies. Then run:
```
bundle install
```
This will install all of the back end dependencies. Then, make sure PostgreSQL is runing in backgorund and run:
```
bundle exec rails db:setup
```
This will create the database, run migrations, and seed with the data. Now run:
```
rails s
```
This will run the rails server and upon navigating to http://localhost:3000/, you will be able to view the web application locally.

## Features
### Video Hover
<h1 align="center">
  <img src="https://github.com/ElishaPark/dancey-plus/blob/master/app/assets/demos/hover.gif" width="600" height="auto" align="center"/>
</h1>

### Video Carousel
<h1 align="center">
  <img src="https://github.com/ElishaPark/dancey-plus/blob/master/app/assets/demos/carousel.gif" width="600" height="auto" align="center"/>
</h1>


### Search Videos

<h1 align="center">
  <img src="https://github.com/ElishaPark/dancey-plus/blob/master/app/assets/demos/search.gif"/>
</h1>
