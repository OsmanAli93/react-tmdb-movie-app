import React from "react";

const MovieCardSkeleton = ({ show }) => {
  return (
    <div className={`c-card ${show}`}>
      <div className="c-card-img"></div>
    </div>
  );
};

export default MovieCardSkeleton;
