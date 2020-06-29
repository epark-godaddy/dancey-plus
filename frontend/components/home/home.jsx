import React from 'react';
import TagCarouselContainer from '../tag_carousel/tag_carousel_container';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchTags();
    this.props.fetchVideos();
    this.props.fetchVideoTags();
  }
  render() {
    if (!this.props.tags) return <div>no tags</div>;
    if (!this.props.videos) return <div>no videos</div>;


    return (
      <div>
        <div className="featured-videos-carousel">
          <Link className="video-link" to={`/videos/1`}>
            <img className="banner-image" src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/banner_image1.png" />
          </Link>
        </div>
        <div className="tag-buttons">
          <Link to="/tag/hip-hop" className="tag-button">
            <img className="image" src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/Disney+hip+hop.png" alt="Hip-Hop" />
            <video
              loop className="hover-image" width="320" height="240"
              onMouseOver={event => event.target.play()}
              onMouseOut={event => event.target.pause()}
              src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/disney_tag.mp4">
            </video>
          </Link>
          <Link to="/tag/ballet" className="tag-button">
            <img className="image" src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/ballet.png" alt="Ballet" />
            <video
              loop className="hover-image" width="320" height="240"
              onMouseOver={event => event.target.play()}
              onMouseOut={event => event.target.pause()}
              src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/pixar_tag.mp4">
            </video>
          </Link>
          <Link to="/tag/latin" className="tag-button">
            <img className="image" src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/latin_tag.png" alt="Latin" />
            <video
              loop className="hover-image" width="320" height="240"
              onMouseOver={event => event.target.play()}
              onMouseOut={event => event.target.pause()}
              src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/marvel.mp4">
            </video>
          </Link>
          <Link to="/tag/jazz-funk" className="tag-button">
            <img className="image" src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/jazzfunk.png" alt="Jazz-Funk" />
            <video
              loop className="hover-image" width="320" height="240"
              onMouseOver={event => event.target.play()}
              onMouseOut={event => event.target.pause()}
              src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/star_wars.mp4">
            </video>
          </Link>
          <Link to="/tag/lyrical" className="tag-button">
            <img className="image" src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/lyrical_tag.png" alt="Lyrical" />
            <video
              loop className="hover-image" width="320" height="240"
              onMouseOver={event => event.target.play()}
              onMouseOut={event => event.target.pause()}
              src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/national_geographic.mp4">
            </video>
          </Link>
        </div>
        <div className="tags-container">
          {this.props.tags.map(tag => (<TagCarouselContainer key={tag.id} tag={tag} />))}
        </div>
      </div>);
  }
}

export default Home;