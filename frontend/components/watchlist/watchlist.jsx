import React from "react";
import VideoGridContainer from "../video_grid/video_grid_container";

class Watchlist extends React.Component {
  componentDidMount() {
    this.props.fetchWatchlistVideos();
    this.props.fetchVideos();
  }
  render() {
    const { videos } = this.props;
    return (
      <div className="results">
        <h1 className="explore-header">Watchlist</h1>
        <VideoGridContainer videos={videos} />
      </div>
    );
  }
}

export default Watchlist;
