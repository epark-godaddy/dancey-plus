import React from 'react';
import VideoGridContainer from '../video_grid/video_grid_container';

class Tag extends React.Component {
  render() {
    const { tag, videos } = this.props;

    if (!tag) return <div></div>;
    return (
      <div>
        <h1>{tag.name}</h1>
        <VideoGridContainer videos={videos}></VideoGridContainer>
      </div>
    );
  }
}

export default Tag;