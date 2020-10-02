import React, { Component } from "react";
import { Container, Header, Button } from "semantic-ui-react";
import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};


  // ComponentDidMount() We will grab local businesses to render them to the screen.

  render() {
    return (
      <>
        <Header as="h2">Welcome to Covid Crusher!</Header>
        <Header as="h2">
          Our mission is to help you make safe and informed decisions when you
          go out in public!
        </Header>
        <Link
          to={{
            pathname: "/profile",
          }}
        >
          <Icon size="huge" name="user circle outline" />
        </Link>
        <Link
          to={{
            pathname: "/add-review",
          }}
        >
          <Button secondary>Check In or Leave a Review</Button>
        </Link>
        <Link
          to={{
            pathname: "/search",
          }}
        >
          <Button secondary>Find a Business on the Map</Button>
        </Link>

        {/* Section. 
      These businesses are Crushing Covid!

      Map through top rated local businesses and render the photo, business title, and star rating.
    */}
      </>
    );
  }
}

export default Home;
