import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import authService from "../../services/authService";
import Users from "../Users/Users";
import "./App.css";
import { Container } from "semantic-ui-react";
import Home from "../../pages/Home/Home"
import ProfilePage from "../../pages/ProfilePage/ProfilePage"
import * as locationService from "../../services/locationID"

class App extends Component {
  state = {

    user: authService.getUser(),
    restaurants: []
  };

  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  async componentDidMount() {
    // get top locations based off of user location
    // store them to database
    // return top 10 of restaurants, top 10 of attractions to user
    const restaurants = await locationService.getTopLocations(this.state.user.location)
    this.setState({restaurants})
    // console.log(restaurants)

  }

  render() {
    const {user} = this.state
    return (
      <Container>
        <NavBar user={user} handleLogout={this.handleLogout} />
        <Route
          exact
          path="/"
          render={() => (
            <Home />
          )}
        />
        <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/users"
          render={() => (user ? <Users /> : <Redirect to="/login" />)}
        />
        <Route 
        exact
        path="/profile"
        render={() => (user ? <ProfilePage user={this.state.user}/> : <Redirect to="/login" />)}
        />
        {/* <Route
          exact
          path="/places/rating"
          render={() => ()}
        /> */}
        {/* <Route
          exact
          path="/map"
          render={() => ()}
        /> */}
      </Container>
    );
  }
}

export default App;
