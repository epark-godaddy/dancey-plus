import React from 'react';
import { withRouter } from 'react-router-dom';

class Video extends React.Component {

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.id);
  }
  render() {
    const { video } = this.props;

    if (!video) return <div></div>;
    return (
      <div className="video-container">
        <button className="video-button" onClick={this.props.history.goBack}>{" <  " + video.title}</button>
        <video className="video" src={video.video_url} controls />
      </div>
    );
  }
}

export default withRouter(Video);