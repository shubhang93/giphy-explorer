import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import StyledTile from "./StyledTile";

// <StyledTile imgData={imgData} rowSpan={rowSpan} />

afterEach(cleanup);

test("Gif renders", async () => {
  const imgData = {
    url: "https://media2.giphy.com/media/l3diCR6NtW5gwNRLi/200w.gif",
    width: "200",
    height: "113",
    size: "1516603",
    mp4: "https://media2.giphy.com/media/l3diCR6NtW5gwNRLi/200w.mp4",
    mp4_size: "286221",
    webp: "https://media2.giphy.com/media/l3diCR6NtW5gwNRLi/200w.webp",
    webp_size: "585664",
    id: "l3diCR6NtW5gwNRLi"
  };

  const { getByLabelText } = render(
    <StyledTile imgData={imgData} rowSpan={5} />
  );

  expect(getByLabelText("gif")).toBeVisible();
});

test("Play/Pause Works", async () => {
  window.HTMLMediaElement.prototype.play = () => { /* do nothing */ };
  window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };

  const imgData = {
    url: "https://media2.giphy.com/media/l3diCR6NtW5gwNRLi/200w.gif",
    width: "200",
    height: "113",
    size: "1516603",
    mp4: "https://media2.giphy.com/media/l3diCR6NtW5gwNRLi/200w.mp4",
    mp4_size: "286221",
    webp: "https://media2.giphy.com/media/l3diCR6NtW5gwNRLi/200w.webp",
    webp_size: "585664",
    id: "l3diCR6NtW5gwNRLi"
  };

  const { getByLabelText } = render(
    <StyledTile imgData={imgData} rowSpan={5} />
  );

  const gifContainer = getByLabelText("gif-container");
  const gif = getByLabelText("gif");
  const playButton = getByLabelText("play-button");

  const isPaused=gif.paused

  expect(playButton).toBeVisible();
  fireEvent.click(playButton);
  expect(playButton).not.toBeVisible();
});