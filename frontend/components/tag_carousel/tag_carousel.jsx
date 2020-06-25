import React from 'react';



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
        <h1>{this.props.tag.name}</h1>
        <div>
          {/* <Slider {...settings}> */}
          {this.props.videos.map(video => (
            <div key={video.id}>
              {video.title}
              <img src={video.image_url} />
            </div>))}
          {/* </Slider> */}
        </div>
      </div>
    );
  }
}

export default TagCarousel;