import React from "react";
import styled from "styled-components";
import StyledTile from "./StyledTile";

export default class Grid extends React.Component {
  state = {};

  sizeMasonryItem = (rowGap, rowHeight, elementHeight) => {
    return Math.ceil((parseInt(elementHeight) + rowGap) / (rowHeight + rowGap));
  };

  render() {
    return (
      <Masonry
        data-testid="grid-component"
        gridGap={this.props.gridGap}
        rowHeight={this.props.rowHeight}
      >
        {this.props.imagesData.map(imgData => {
          const rowSpan = this.sizeMasonryItem(
            this.props.gridGap,
            this.props.rowHeight,
            imgData.height
          );
          return (
            <StyledTile imgData={imgData} key={imgData.id} rowSpan={rowSpan} />
          );
        })}
      </Masonry>
    );
  }
}

const Masonry = styled.div`
  display: grid;
  grid-gap: ${props => props.gridGap + "px"};
  grid-template-columns: repeat(auto-fill, 200px);
  grid-auto-rows: ${props => props.rowHeight + "px"};
  justify-content: space-evenly;
`;
