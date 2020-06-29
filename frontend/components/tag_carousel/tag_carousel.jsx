import React from 'react';
import { Link } from 'react-router-dom';



class TagCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { left: 0, slideValue: 1500 };
    this.imagesContainerRef = React.createRef(); //creates a reference, which is then passed to images container  --> gives us the width 
    this.slideRight = this.slideRight.bind(this);
    this.slideLeft = this.slideLeft.bind(this);
  }

  componentDidMount() {
    const slideValue = this.imagesContainerRef.current.clientWidth;
    this.setState({ slideValue });
  }


  slideRight() {
    this.setState({ left: this.state.left - this.state.slideValue });
  }

  slideLeft() {
    this.setState({ left: this.state.left + this.state.slideValue });
  }
  render() {
    if (!this.props.videos.length) return <div ref={this.imagesContainerRef}></div>;
    const isFirstPage = this.state.left === 0;
    const marginAndPaddingPerVideo = 18;
    const width = this.state.slideValue / 5 - marginAndPaddingPerVideo;

    return (
      <div>
        <div className="tag-carousel-container">
          <h1 className="tag-name">{this.props.tag.name}</h1>
          <div className="carousel-container">
            {!isFirstPage && <div className="left-button" onClick={this.slideLeft}><svg alt="" aria-hidden="true" aria-label="arrowLeft" color="white" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="sc-cSHVUG fPNrHk" style={{ height: '100px', minWidth: '40px', width: '40px', zIndex: 'auto', fill: 'white' }}><path d="M22.324 28.008c.537.577.355 1.433-.326 1.809a1.44 1.44 0 0 1-.72.183c-.398 0-.786-.151-1.048-.438L10.06 18.588a1.126 1.126 0 0 1 0-1.555L20.233 6.09c.438-.468 1.198-.564 1.767-.25.681.377.863 1.23.325 1.808l-9.446 10.164 9.446 10.196zM11.112 17.615a.31.31 0 0 1 0 .391l.182-.195-.182-.196zM21.308 7.094c-.01-.006-.053 0-.029-.027a.07.07 0 0 0 .029.027zm-.025 21.499a.95.95 0 0 1-.006-.008l.006.008z" className="sc-jzJRlG dPjNeY"></path></svg></div>}
            <div className="images-container" ref={this.imagesContainerRef}>
              <div className='inner-container' style={{ left: this.state.left }}>
                {this.props.videos.map(video => (
                  <Link key={video.id} className="video-link" style={{ minWidth: width }} to={`/videos/${video.id}`}>
                    <img className="image" src={video.image_url} key={video.id} />
                  </Link>
                ))}
              </div>
            </div>
            <div className="right-button" onClick={this.slideRight}><svg alt="" aria-hidden="true" aria-label="arrowRight" color="white" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="sc-cSHVUG fPNrHk" style={{ height: '100px', minWidth: '40px', width: '40px', zIndex: 'auto', fill: 'white' }}><path d="M13.065 7.65c-.538-.578-.355-1.433.325-1.81a1.44 1.44 0 0 1 .72-.182c.398 0 .786.15 1.048.437L25.327 17.07a1.126 1.126 0 0 1 0 1.555L15.155 29.568c-.438.468-1.198.563-1.767.25-.681-.377-.863-1.23-.325-1.809l9.446-10.164L13.065 7.65zm11.211 10.393a.31.31 0 0 1 0-.391l-.181.194.181.197zM14.081 28.564c.01.006.053 0 .028.027a.07.07 0 0 0-.028-.027zm.024-21.5a.95.95 0 0 1 .007.008l-.007-.007z" className="sc-jzJRlG dPjNeY"></path></svg></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TagCarousel;