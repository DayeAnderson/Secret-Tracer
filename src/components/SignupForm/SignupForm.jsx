import React, { Component } from "react";
import { Link } from "react-router-dom";
import authService from "../../services/authService";
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
    location: {}
  };

  handleChange = (e) => {
    this.props.updateMessage("");
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, updateMessage, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        },
      });
    });
  }

  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
          <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Create an account
              </Header>
              <Form autoComplete="off" onSubmit={this.handleSubmit} size='large'>
                <Segment stacked>
                  <Form.Input
                    fluid icon='user'
                    type="text"
                    autoComplete="off"
                    id="name"
                    value={name}
                    name="name"
                    onChange={this.handleChange}
                  />
                  <Form.Input 
                    fluid icon='user' 
                    iconPosition='left' 
                    placeholder='E-mail address' 
                    type="text"
                    autoComplete="off"
                    id="email"
                    value={email}
                    name="email"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    id="password"
                    value={password}
                    iconPosition='left'
                    autoComplete="off"
                    placeholder='Password'
                    type='password'
                    name="password"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    id="confirm"
                    value={passwordConf}
                    iconPosition='left'
                    autoComplete="off"
                    placeholder='Confirm Password'
                    type='password'
                    name="passwordConf"
                    onChange={this.handleChange}
                  />
                  <Button disabled={this.isFormInvalid()} color='teal' fluid size='large'>
                    Sign Up
                  </Button>
                </Segment>
              </Form>
              <Message>
                <a href='/'>Cancel</a>
              </Message>
            </Grid.Column>
          </Grid>
    );
  }
}

export default SignupForm;
