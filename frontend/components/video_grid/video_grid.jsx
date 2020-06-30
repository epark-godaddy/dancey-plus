import React from 'react';
import { Link } from 'react-router-dom';

class VideoGrid extends React.Component {


  render() {
    if (!this.props.videos) return <div>no videos</div>;
    return (
      <div className='video-grid'>
        {this.props.videos.map(video => (
          <Link key={video.id} className="video-link" to={`/videos/${video.id}`}>
            <img className="image" src={video.image_url} key={video.id} />
          </Link>
        ))}
      </div>
    );
  }
}

export default VideoGrid;
