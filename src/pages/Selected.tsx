import React, { Fragment } from "react";
import useSWR from "swr";

import Pokemon from "../components/Pokemon.tsx";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type SelectedProps = {
  params: { id: string };
};

const Selected = ({ params }: SelectedProps) => {
  const { data, error } = useSWR(
    () =>
      params?.id ? `https://pokeapi.co/api/v2/pokemon/${params?.id}` : null,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <Pokemon
            name={data?.name}
            height={data?.height}
            weight={data?.weight}
            image={data?.sprites?.front_shiny}
          ></Pokemon>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default Selected;
