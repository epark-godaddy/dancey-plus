import React from "react";
import { Link } from "react-router-dom";
import ThumbnailContainer from "../thumbnail/thumbnail_container";

class VideoGrid extends React.Component {
  render() {
    if (!this.props.videos) return <div></div>;
    return (
      <div className="video-grid">
        {this.props.videos.map((video) => (
          <ThumbnailContainer video={video} />
        ))}
      </div>
    );
  }
}

export default VideoGrid;
