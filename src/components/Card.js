import React from "react";
import "tachyons";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc">
      <img src={`https://robohash.org/${id}?200x200" alt='this is an image'`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
