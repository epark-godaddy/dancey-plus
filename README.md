# README

# Dancey+

## Table of Contents
* Introduction
* Technologies
* Setup
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

````css
.video-link {
      margin: 0px 5px;
      padding: 4px;
      width: 17%;

      .image {
        box-sizing: border-box;
        object-fit: cover;
        width: 100%;
        backface-visibility: hidden;
        cursor: pointer;
        display: block;
        position: relative;
        transform: scale(1, 1) translateZ(0px);
        transition-duration: 300ms;
        transition-property: transform, box-shadow;
        transition-timing-function: ease-out;
        -webkit-font-smoothing: subpixel-antialiased;
        border-radius: 8px;
        border-width: 4px;
        border-style: solid;
        border-color: transparent;
        border-image: initial;

        &:hover {
          box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px, rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;
          transform: scale(1.05, 1.05) translateZ(0px) translate3d(0px, 0px, 0px);
          transition-duration: 300ms;
          transition-property: transform, box-shadow;
          transition-timing-function: ease-out;
          border-width: 4px;
          border-style: solid;
          border-color: rgba(249, 249, 249, 0.8);
          border-image: initial;
        }
      }
 ````
### Video Carousel
<h1 align="center">
  <img src="https://github.com/ElishaPark/dancey-plus/blob/master/app/assets/demos/carousel.gif" width="600" height="auto" align="center"/>
</h1>

````javascript
class TagCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { left: 0, slideValue: 1500 };
    this.imagesContainerRef = React.createRef(); //creates a reference, which is then passed to images container  --> gives us the width 
    this.slideRight = this.slideRight.bind(this);
    this.slideLeft = this.slideLeft.bind(this);
  }

  componentDidMount() {
    const slideValue = this.imagesContainerRef.current.clientWidth;
    this.setState({ slideValue });
  }


  slideRight() {
    this.setState({ left: this.state.left - this.state.slideValue });
  }

  slideLeft() {
    this.setState({ left: this.state.left + this.state.slideValue });
  }
  render() {
    if (!this.props.videos.length) return <div ref={this.imagesContainerRef}></div>;
    const isFirstPage = this.state.left === 0;
    const marginAndPaddingPerVideo = 18;
    const width = this.state.slideValue / 5 - marginAndPaddingPerVideo;

    return (
      <div>
        <div className="tag-carousel-container">
          <h1 className="tag-name">{this.props.tag.name}</h1>
          <div className="carousel-container">
            {!isFirstPage && <div className="left-button" onClick={this.slideLeft}><svg alt="" aria-hidden="true" aria-label="arrowLeft" color="white" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="sc-cSHVUG fPNrHk" style={{ height: '100px', minWidth: '40px', width: '40px', zIndex: 'auto', fill: 'white' }}><path d="M22.324 28.008c.537.577.355 1.433-.326 1.809a1.44 1.44 0 0 1-.72.183c-.398 0-.786-.151-1.048-.438L10.06 18.588a1.126 1.126 0 0 1 0-1.555L20.233 6.09c.438-.468 1.198-.564 1.767-.25.681.377.863 1.23.325 1.808l-9.446 10.164 9.446 10.196zM11.112 17.615a.31.31 0 0 1 0 .391l.182-.195-.182-.196zM21.308 7.094c-.01-.006-.053 0-.029-.027a.07.07 0 0 0 .029.027zm-.025 21.499a.95.95 0 0 1-.006-.008l.006.008z" className="sc-jzJRlG dPjNeY"></path></svg></div>}
            <div className="images-container" ref={this.imagesContainerRef}>
              <div className='inner-container' style={{ left: this.state.left }}>
                {this.props.videos.map(video => (
                  <Link key={video.id} className="video-link" style={{ minWidth: width }} to={`/videos/${video.id}`}>
                    <img className="image" src={video.image_url} key={video.id} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="right-button" onClick={this.slideRight}><svg alt="" aria-hidden="true" aria-label="arrowRight" color="white" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="sc-cSHVUG fPNrHk" style={{ height: '100px', minWidth: '40px', width: '40px', zIndex: 'auto', fill: 'white' }}><path d="M13.065 7.65c-.538-.578-.355-1.433.325-1.81a1.44 1.44 0 0 1 .72-.182c.398 0 .786.15 1.048.437L25.327 17.07a1.126 1.126 0 0 1 0 1.555L15.155 29.568c-.438.468-1.198.563-1.767.25-.681-.377-.863-1.23-.325-1.809l9.446-10.164L13.065 7.65zm11.211 10.393a.31.31 0 0 1 0-.391l-.181.194.181.197zM14.081 28.564c.01.006.053 0 .028.027a.07.07 0 0 0-.028-.027zm.024-21.5a.95.95 0 0 1 .007.008l-.007-.007z" className="sc-jzJRlG dPjNeY"></path></svg></div>
          </div>
        </div>
      </div>
    );
  }
}

````

### Search Videos

<h1 align="center">
  <img src="https://github.com/ElishaPark/dancey-plus/blob/master/app/assets/demos/search.gif"/>
</h1>

````javascript
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: this.props.videos,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchTags();
    this.props.fetchVideos();
    this.props.fetchVideoTags();
  }

  componentDidUpdate(prevProps) {
    // when there were no videos, now there are videos, set the state
    if (prevProps.videos.length <= 1 && this.props.videos.length > 1)
      this.setState({ results: this.props.videos });
  }

  getTagNamesFromVideo(video) {
    const { tags, videoTags } = this.props;

    // find all the tag ids associated with this video
    const tagIds = [];
    videoTags.forEach((videoTag) => {
      if (videoTag.video_id === video.id) {
        tagIds.push(videoTag.tag_id);
      }
    });

    const tagNames = tagIds.map((tagId) => {
      const tag = tags.find((tag) => tag.id === tagId);
      return tag.name;
    });

    return tagNames;
  }

  hasTagNameThatMatchesQuery(video, query) {
    const tagNames = this.getTagNamesFromVideo(video);
    return tagNames.some((tagName) =>
      tagName.toLowerCase().includes(query.toLowerCase())
    );
  }

  hasTitleThatMatchesQuery(video, query) {
    return video.title.toLowerCase().includes(query.toLowerCase());
  }

  setResults(query) {
    const results = this.props.videos.filter((video) => {
      return (
        this.hasTitleThatMatchesQuery(video, query) ||
        this.hasTagNameThatMatchesQuery(video, query)
      );
    });
    this.setState({ results: results });
  }

  handleChange(event) {
    const query = event.target.value;
    this.setState({ query, loading: true, message: "" });
    this.setResults(query);
  }

  render() {
    const { query, results } = this.state;

    return (
      <div>
        <input
          className="search-form"
          type="text"
          placeholder="Search by title, dance style, or video type"
          value={query}
          onChange={this.handleChange}
        />

        <div className="results">
          <h1 className="explore-header">Explore</h1>
          <VideoGridContainer videos={results} />
        </div>
        <div className="search-container-space"></div>
      </div>
    );
  }
}

````

