import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <>
        <Menu className="bottom fixed menu " secondary icon>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <Link
              to={{
                pathname: "/",
              }}
            >
              <Icon name="home" />
            </Link>
          </Menu.Item>

          <Menu.Item
            name="search"
            active={activeItem === "search"}
            onClick={this.handleItemClick}
          >
            <Link
              to={{
                pathname: "/search",
              }}
            >
              <Icon name="search" />
            </Link>
          </Menu.Item>
          <Menu.Item
            name="add_review"
            active={activeItem === "add_review"}
            onClick={this.handleItemClick}
          >
            <Link
              to={{
                pathname: "/add-review",
              }}
            >
              <Icon name="plus circle" />
            </Link>
          </Menu.Item>

          <Menu.Item
            name="map"
            active={activeItem === "map"}
            onClick={this.handleItemClick}
          >
            <Link
              to={{
                pathname: "/map",
              }}
            >
              <Icon name="map marker alternate" />
            </Link>
          </Menu.Item>
          <Menu.Item
            name="profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          >
            <Link
              to={{
                pathname: "/profile",
              }}
            >
              <Icon name="user circle outline" />
            </Link>
          </Menu.Item>
        </Menu>
      </>
    );
  }
}

export default NavBar;
