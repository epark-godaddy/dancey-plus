import React from 'react';

class Video extends React.Component {

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.id);
  }
  render() {
    const { video } = this.props;

    if (!video) return <div></div>;
    return (
      <div>
        <video className="video" src={video.video_url} controls />
      </div>
    );
  }
}

export default Video;