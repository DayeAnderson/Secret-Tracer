import React, { Component } from "react";
import { Header, Button } from "semantic-ui-react";
import { Icon, Search, Grid, Segment, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import RestaurantQuickView from '../../components/RestaurantQuickView/RestaurantQuickView'

class Home extends Component {
  state = {
  };

  

  render() {
    return (
      <>
        <SearchBar />
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

        <section>
          <h1>hello</h1>
          {this.props.restaurants.map(restaurant => (
             <RestaurantQuickView details={restaurant}/>
          ))}
        </section>
      </>
    );
  }
}

export default Home;
