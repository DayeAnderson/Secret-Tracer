import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";

class NavBar extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <>
        <Menu icon>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <Icon name="home" />
          </Menu.Item>

          <Menu.Item
            name="search"
            active={activeItem === "search"}
            onClick={this.handleItemClick}
          >
            <Icon name="search" />
          </Menu.Item>

          <Menu.Item
            name="map"
            active={activeItem === "map"}
            onClick={this.handleItemClick}
          >
            <Icon name="map" />
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default NavBar;
