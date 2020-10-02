import React from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RestaurantQuickView = ({ details }) => {
  return (
    <>
      {details.photo && (
        <>
          <Link
            to={{
              pathname: "/restaurant",
              state: { restaurant: details},
            }}
          >
            <Image
              src={details.photo.images.medium.url}
              // as="a"
              size="medium"
              target="_blank"
            />
          </Link>
          <h2 textAlign="center">{details.name}</h2>
        </>
      )}
    </>
  );
};

export default RestaurantQuickView;
