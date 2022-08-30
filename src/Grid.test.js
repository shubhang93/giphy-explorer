import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import "jest-dom/extend-expect";
import Grid from "./Grid";

// <Grid imagesData={this.state.imgData} gridGap={20} rowHeight={0} />

afterEach(cleanup);

test("renders grid container", async () => {
  const imagesData = [
    {
      url: "https://media2.giphy.com/media/l3diCR6NtW5gwNRLi/200w.gif",
      width: "200",
      height: "113",
      size: "1516603",
      mp4: "https://media2.giphy.com/media/l3diCR6NtW5gwNRLi/200w.mp4",
      mp4_size: "286221",
      webp: "https://media2.giphy.com/media/l3diCR6NtW5gwNRLi/200w.webp",
      webp_size: "585664",
      id: "l3diCR6NtW5gwNRLi"
    },
    {
      url: "https://media1.giphy.com/media/MB5fyUnwxT61TCr5bD/200w.gif",
      width: "200",
      height: "200",
      size: "1489711",
      mp4: "https://media1.giphy.com/media/MB5fyUnwxT61TCr5bD/200w.mp4",
      mp4_size: "222059",
      webp: "https://media1.giphy.com/media/MB5fyUnwxT61TCr5bD/200w.webp",
      webp_size: "688334",
      id: "MB5fyUnwxT61TCr5bD"
    }
  ];

  const { getByTestId } = render(
    <Grid imagesData={imagesData} gridGap={20} rowHeight={0} />
  );

  expect(getByTestId("grid-component")).toBeInTheDocument();
});
