import React from "react";
import { Link } from "react-router-dom";

class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    const {
      userSavedVideoIds,
      video,
      addVideoToWatchlist,
      removeVideoFromWatchlist,
    } = this.props;

    return (e) => {
      e.preventDefault();
      if (!userSavedVideoIds.includes(video.id)) {
        addVideoToWatchlist(video.id);
      } else {
        removeVideoFromWatchlist(video.id);
      }
    };
  }
  render() {
    const { video, style, userSavedVideoIds } = this.props;
    const showAddToWatchlist = !userSavedVideoIds.includes(video.id);
    return (
      <div class="thumbnail-container" style={style}>
        <Link key={video.id} className="video-link" to={`/videos/${video.id}`}>
          <img className="image" src={video.image_url} key={video.id} />
        </Link>
        {showAddToWatchlist && (
          <svg
            onClick={this.handleClick()}
            alt="Add to Watchlist"
            aria-hidden="true"
            aria-label="watchlist"
            color="#f9f9f9"
            role="img"
            version="1.1"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            data-route="WATCHLIST"
            className="sc-cSHVUG fPNrHk"
            style={{
              height: "24px",
              minWidth: "24px",
              width: "24px",
              zIndex: "auto",
              fill: "#ffffff",
            }}
          >
            <title>Add to Watchlist</title>
            <use>
              <title>Add to Watchlist</title>
            </use>

            <path
              d="M27.85 15.1H20.9V8.15a2.9 2.9 0 0 0-5.8 0v6.95H8.15a2.9 2.9 0 0 0 0 5.8h6.95v6.95a2.9 2.9 0 0 0 5.8 0V20.9h6.95a2.9 2.9 0 1 0 0-5.8z"
              className="sc-jzJRlG dPjNeY"
            ></path>
          </svg>
        )}
        {!showAddToWatchlist && (
          <svg
            onClick={this.handleClick()}
            alt="Remove from Watchlist"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
            style={{
              height: "24px",
              minWidth: "24px",
              width: "24px",
              zIndex: "auto",
              fill: "#ffffff",
            }}
          >
            <title>Remove from Watchlist</title>
            <use>
              <title>Remove from Watchlist</title>
            </use>

            <path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" />
          </svg>
        )}
      </div>
    );
  }
}
export default Thumbnail;
