import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchTags();
    this.props.fetchVideos();
  }
  render() {
    if (!this.props.tags) return <div>no tags</div>;
    if (!this.props.videos) return <div>no videos</div>;
    return (<div>
      <div>tags should be rendered here</div>
      {this.props.tags.map(tag => (<div key={tag.id}>{tag.name}</div>))}
      <div>videos should be rendered here</div>
      {this.props.videos.map(video => (<div key={video.id}>{video.title}</div>))}
    </div>)
  }
}

export default Home;