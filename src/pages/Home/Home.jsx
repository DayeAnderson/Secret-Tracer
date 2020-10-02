import React, { Component } from "react";
import { Header, Button } from "semantic-ui-react";
import { Icon, Search, Grid, Segment, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import RestaurantQuickView from "../../components/RestaurantQuickView/RestaurantQuickView";

class Home extends Component {
  state = {};

  render() {
    return (
      <>
        {/* <SearchBar /> */}
        <Header as="h2">Welcome to Covid Crusher!</Header>
        <Header as="h2">
          Our mission is to help you make safe and informed decisions when you
          go out in public!
        </Header>
        <Grid textAlign="center" columns={1}>
          <Grid.Row>
            <Grid.Column>
              <div >
                <Link
                  to={{
                    pathname: "/login",
                  }}
                >
                  <Icon size="huge" name="user circle outline" />
                </Link>
                <h3>Sign In</h3>
              </div>
              {/* <div style={{ margin: "10px" }}>
                <Link
                  to={{
                    pathname: "/add-review",
                  }}
                >
                  <Button secondary>Check In or Leave a Review</Button>
                </Link>
              </div> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <section style={{marginTop: "30px"}}>
          <h2>Restauraunt Results</h2>
          {this.props.restaurants.map((restaurant) => (
            <RestaurantQuickView details={restaurant} />
          ))}
        </section>
      </>
    );
  }
}

export default Home;
