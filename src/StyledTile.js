import React from "react";
import styled from "styled-components";

class Tile extends React.Component {
  videoRef = React.createRef();
  playButtonRef = React.createRef();

  playHandler = () => {
    if (this.videoRef.current.paused) {
      this.videoRef.current.play();
      this.playButtonRef.current.style.display = "none";
    } else {
      this.videoRef.current.pause();
      this.playButtonRef.current.style.display = "";
    }
  };

  render() {
    return (
      <div
        aria-label="gif-container"
        className={this.props.className}
        onClick={this.playHandler}
      >
        <div
          className="play-button"
          aria-label="play-button"
          ref={this.playButtonRef}
        >
          <span>&#9654;</span>
        </div>
        <Video
          aria-label="gif"
          height={this.props.imgData.height}
          ref={this.videoRef}
          loop
        >
          <source src={this.props.imgData.mp4} type="video/mp4" />
        </Video>
      </div>
    );
  }
}

const StyledTile = styled(Tile)`
  display: grid;
  grid-row-end: span ${props => props.rowSpan};
  position: relative;
  cursor: pointer;
  .play-button {
    position: absolute;
    top: 42%;
    left: 46%;
    color: #fff;
    span {
      text-shadow: 5px 5px 10px #909090;
      font-size: 20px;
    }
  }
`;

const Video = styled.video`
  height: ${props => props.height};
  width: 200px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #909090;
  background-color: #555;
`;

export default StyledTile;
