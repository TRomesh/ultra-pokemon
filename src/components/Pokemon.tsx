import React, { Fragment } from "react";

type PokemonPropType = {
  name: string;
  height: number;
  weight: number;
  image: string;
};

const Pokemon = ({ name, height, weight, image }: PokemonPropType) => {
  return (
    <div className="card" style={{ width: "40rem" }}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Height :{height} Weight: {weight}
        </h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};
11;

export default Pokemon;
