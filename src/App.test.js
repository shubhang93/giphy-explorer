import React from "react";
import {
  render,
  cleanup,
  waitForElement,
} from "@testing-library/react";
import "jest-dom/extend-expect";
import App from "./App";

afterEach(cleanup);

test("renders <Logo/>", async () => {
  const { getByTestId } = render(<App />);

  const searchBarNode = await waitForElement(() =>
    getByTestId("logo-component")
  );

  expect(searchBarNode).toBeInTheDocument();
});

test("renders <Search/>", async () => {
  const { getByPlaceholderText } = render(<App />);

  const searchBarNode = await waitForElement(() =>
    getByPlaceholderText("Search something... Try 'Cats'")
  );

  expect(searchBarNode).toBeInTheDocument();
});

test("renders <Grid/>", async () => {
  const { getByTestId } = render(<App />);

  const searchBarNode = await waitForElement(() =>
    getByTestId("grid-component")
  );

  expect(searchBarNode).toBeInTheDocument();
});
