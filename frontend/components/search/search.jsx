import React from "react";
import VideoGridContainer from "../video_grid/video_grid_container";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: this.props.videos,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchTags();
    this.props.fetchVideos();
    this.props.fetchVideoTags();
    this.props.fetchWatchlistVideos();
  }

  componentDidUpdate(prevProps) {
    // when there were no videos, now there are videos, set the state
    if (prevProps.videos.length <= 1 && this.props.videos.length > 1)
      this.setState({ results: this.props.videos });
  }

  getTagNamesFromVideo(video) {
    const { tags, videoTags } = this.props;

    // find all the tag ids associated with this video
    const tagIds = [];
    videoTags.forEach((videoTag) => {
      if (videoTag.video_id === video.id) {
        tagIds.push(videoTag.tag_id);
      }
    });

    const tagNames = tagIds.map((tagId) => {
      const tag = tags.find((tag) => tag.id === tagId);
      return tag.name;
    });

    return tagNames;
  }

  hasTagNameThatMatchesQuery(video, query) {
    const tagNames = this.getTagNamesFromVideo(video);
    return tagNames.some((tagName) =>
      tagName.toLowerCase().includes(query.toLowerCase())
    );
  }

  hasTitleThatMatchesQuery(video, query) {
    return video.title.toLowerCase().includes(query.toLowerCase());
  }

  setResults(query) {
    const start = new Date().getTime();
    const results = this.props.videos.filter((video) => {
      return (
        this.hasTitleThatMatchesQuery(video, query) ||
        this.hasTagNameThatMatchesQuery(video, query)
      );
    });
    this.setState({ results: results });
    const end = new Date().getTime();
    console.log(end - start);
    console.log(end);
    console.log(start);
  }

  handleChange(event) {
    const query = event.target.value;
    this.setState({ query, loading: true, message: "" });
    this.setResults(query);
  }

  render() {
    const { query, results } = this.state;

    return (
      <div>
        <input
          className="search-form"
          type="text"
          placeholder="Search by title, dance style, or video type"
          value={query}
          onChange={this.handleChange}
        />

        <div className="results">
          <h1 className="explore-header">Explore</h1>
          <VideoGridContainer videos={results} />
        </div>
        <div className="search-container-space"></div>
      </div>
    );
  }
}

export default Search;
