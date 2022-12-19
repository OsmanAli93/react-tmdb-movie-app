import React from "react";
import Form from "../Form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { movieSearch } from "../../redux/actions/movieAction";

const Header = ({ title, container, background }) => {
  const formItems = [
    {
      type: "text",
      className: "form-control",
      placeholder: "Search...",
      value: "",
    },
  ];

  const dispatch = useDispatch();

  const searchMovies = (value) => {
    dispatch(movieSearch(value));
  };

  return (
    <nav className={`navbar navbar-expand-lg py-3 ${background}`}>
      <div className={container}>
        <div>
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div>
          <Form formItems={formItems} searchMovies={searchMovies} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
