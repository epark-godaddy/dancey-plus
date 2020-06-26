import React from 'react';
import { Link } from 'react-router-dom';



class TagCarousel extends React.Component {
  render() {
    if (!this.props.videos) return <div></div>;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    };
    return (
      <div>
        <div className="tag-carousel-container">
          <h1 className="tag-name">{this.props.tag.name}</h1>
          <div className="images-container">
            {this.props.videos.map(video => (
              <Link className="video-link" to={`/videos/${video.id}`}>
                <img className="image" src={video.image_url} key={video.id} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TagCarousel;