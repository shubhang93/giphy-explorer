import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "jest-dom/extend-expect";
import Search from "./Search";

afterEach(cleanup);

/*
<Search
  data-testid="search-component"
  onChange={this.onChange}
  value={this.state.searchTerm}
  fetchImages={this.fetchImages}
/>
*/

test("Search works on click", async () => {
  let value = "";
  const onChange = jest.fn(val => {
    value = val.target.value;
  });
  const fetchImages = jest.fn();

  const { getByPlaceholderText, getByTestId, rerender } = render(
    <Search onChange={onChange} value={value} fetchImages={fetchImages} />
  );

  const searchInput = getByPlaceholderText("Search something... Try 'Cats'");
  const searchButton = getByTestId("search-button");

  expect(searchInput.value).toBe("");
  fireEvent.change(searchInput, { target: { value: "gojek" } });
  rerender(
    <Search onChange={onChange} value={value} fetchImages={fetchImages} />
  );
  expect(searchInput.value).toBe("gojek");
  fireEvent.click(searchButton);
  expect(searchInput.value).toBe("gojek");
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(fetchImages).toHaveBeenCalledTimes(1);
  expect(fetchImages).toHaveBeenCalledWith("gojek");
});

test("Search works on enter", async () => {let value = "";
  const onChange = jest.fn(val => {
    value = val.target.value;
  });
  const fetchImages = jest.fn();

  const { getByPlaceholderText, rerender } = render(
    <Search onChange={onChange} value={value} fetchImages={fetchImages} />
  );

  const searchInput = getByPlaceholderText("Search something... Try 'Cats'");

  expect(searchInput.value).toBe("");
  fireEvent.change(searchInput, { target: { value: "gojek" } });
  rerender(
    <Search onChange={onChange} value={value} fetchImages={fetchImages} />
  );
  expect(searchInput.value).toBe("gojek");
  fireEvent.keyPress(searchInput, { key: "Enter", code: 13, charCode: 13 });
  expect(searchInput.value).toBe("gojek");
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(fetchImages).toHaveBeenCalledTimes(1);
  expect(fetchImages).toHaveBeenCalledWith("gojek");
});
