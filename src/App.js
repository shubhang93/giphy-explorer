import React from "react";
import Search from "./Search";
import styled from "styled-components";
import constants from "./config/constants";
import Grid from "./Grid";
import "./App.css";
import logo from "./goGifLogo.png";

class App extends React.Component {
  state = {
    searchTerm: "",
    imgData: []
  };

  componentDidMount() {
    this.fetchImages();
  }

  onChange = event => {
    let value = event.target.value;
    this.setState({ searchTerm: value });
  };

  fetchImages = async searchTerm => {
    const endpoint = searchTerm
      ? `search/${encodeURIComponent(searchTerm)}`
      : `trending`;
    try {
      let resp = await fetch(constants.BASE_API_URL + endpoint);
      if (resp.status !== 200) {
        throw new Error(resp.status);
      }
      let jsonData = await resp.json();
      this.setState({
        imgData: jsonData.map(img => ({
          ...img.images.fixed_width,
          id: img.id
        }))
      });
    } catch (err) {
      console.log("fetchImages err", err);
    }
  };

  render() {
    return (
      <Container>
        <Logo data-testid="logo-component" />
        <Search
          data-testid="search-component"
          onChange={this.onChange}
          value={this.state.searchTerm}
          fetchImages={this.fetchImages}
        />
        <Grid imagesData={this.state.imgData} gridGap={20} rowHeight={0} />
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Logo = styled.div`
  background-image: url(${logo});
  margin: 25px 5px;
  height: 55px;
  width: 300px;
`;
