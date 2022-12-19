import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../api/moviesApi";

const MovieDetail = (props) => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    API.requestGetMovie(id)
      .then((data) => setDetail(data))
      .catch((error) => error);
  }, [id]);
  console.log(detail);

  const convertMinutesToHours = (minutes) => {
    const totalMinutes = Number(minutes);

    const hours = Math.floor(totalMinutes / 60);
    const min = totalMinutes % 60;

    return `${hours} hours ${min} minutes`;
  };

  return (
    <section className="movie-detail section-gap">
      <div className="container">
        <div className="row">
          {detail && (
            <>
              <div className="col-lg-5">
                <div className="movie-img">
                  <img
                    src={`http://image.tmdb.org/t/p/w500/${detail.poster_path}`}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-lg-7">
                <div className="movie-details">
                  <h3 className="mb-4">{detail.title}</h3>
                  <div className="d-flex mb-4">
                    {detail.genres &&
                      detail.genres.map((genre) => (
                        <span className="genre" key={genre.id}>
                          {genre.name}
                        </span>
                      ))}
                  </div>
                  <p className="overview mb-4">{detail.overview}</p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      Runtime: {convertMinutesToHours(detail.runtime)}
                    </li>
                    <li className="mb-2">
                      Released Date: {detail.release_date}
                    </li>
                    <li className="mb-2">Popularity: {detail.popularity}</li>
                    <li className="mb-2">Budget: {detail.budget}</li>
                    <li className="mb-2">Vote Count: {detail.vote_count}</li>
                    <li className="mb-2">
                      Vote Average: {detail.vote_average}
                    </li>
                  </ul>
                  {detail.production_countries && (
                    <div className="countries pt-3">
                      Country:
                      {detail.production_countries.map((country, i) => (
                        <span> {country.name},</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default MovieDetail;
