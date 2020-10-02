import React from "react";
import { Image } from "semantic-ui-react";

const RestaurantQuickView = ({ details }) => {
  return (
    <>
      {details.photo && (
        <>
          <Image
            src={details.photo.images.medium.url}
            as="a"
            size="medium"
            href={details.web_url}
            target="_blank"
          />
          <h2>{details.name}</h2>
        </>
      )}
    </>
  );
};

export default RestaurantQuickView;
