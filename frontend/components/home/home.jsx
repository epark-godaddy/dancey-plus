import React from 'react';
import TagCarouselContainer from '../tag_carousel/tag_carousel_container';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { muted: false };

    this.toggleVolume = this.toggleVolume.bind(this);
  }
  componentDidMount() {
    this.props.fetchTags();
    this.props.fetchVideos();
    this.props.fetchVideoTags();
  }

  goToPage(path) {
    return () => {
      this.props.history.push(path);
    };
  }

  toggleVolume() {
    this.setState({ muted: !this.state.muted });
  }


  render() {
    if (!this.props.tags) return <div>no tags</div>;
    if (!this.props.videos) return <div>no videos</div>;
    if (!this.props.videos[1]) return <div>no videos</div>;

    const { muted } = this.state;
    return (
      <div>
        <div className="video-container">
          <div className="featured-video">
            <video autoPlay loop src={this.props.videos[1] && this.props.videos[1].video_url + '#t=127,174.5'} muted={muted}></video>
          </div>
        </div>
        <div className="video-buttons-container">
          <div className="video-title">Sorah Yang Presents: Take Me Under</div>
          <div className="video-description">"To all the amazing, powerful, smart, creative, qualified, strong, beautiful, resilient, deserving women around the world who have ever been made to feel otherwise... this one's for you." -Sorah</div>
          <div className="video-buttons">
            <button className="play btn-secondary" onClick={this.goToPage(`/videos/${this.props.videos[1].id}`)}>PLAY</button>
            {!this.state.muted && <button className="btn-secondary volume" onClick={this.toggleVolume}><div className='unmuted'></div></button>}
            {this.state.muted && <button className="btn-secondary volume" onClick={this.toggleVolume}><div className='muted '></div></button>}
          </div>
        </div>
        <div className="video-links-container">
          <div className="tag-buttons">
            <Link to="/tags/1" className="tag-button">
              <img className="image" src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/Disney+hip+hop.png" alt="Hip-Hop" />
              <video
                loop className="hover-image" width="320" height="240"
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/disney_tag.mp4">
              </video>
            </Link>
            <Link to="/tags/2" className="tag-button">
              <img className="image" src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/ballet.png" alt="Ballet" />
              <video
                loop className="hover-image" width="320" height="240"
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/pixar_tag.mp4">
              </video>
            </Link>
            <Link to="/tags/5" className="tag-button">
              <img className="image" src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/latin_tag.png" alt="Latin" />
              <video
                loop className="hover-image" width="320" height="240"
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/marvel.mp4">
              </video>
            </Link>
            <Link to="/tags/3" className="tag-button">
              <img className="image" src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/jazzfunk.png" alt="Jazz-Funk" />
              <video
                loop className="hover-image" width="320" height="240"
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src="https://dancey-plus-seeds.s3-us-west-1.amazonaws.com/star_wars.mp4">
              </video>
            </Link>
            <Link to="/tags/4" className="tag-button">
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
        </div>
      </div>);
  }
}

export default Home;