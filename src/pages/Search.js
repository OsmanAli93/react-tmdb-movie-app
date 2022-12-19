import React from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const { search } = useParams();

  return <div>{search}</div>;
};

export default Search;
