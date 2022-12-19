import React from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";

const Pagination = (props) => {
  const { onPageChange } = props;

  const handleClick = (data) => {
    let currentPage = data.selected + 1;
    onPageChange(currentPage);
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <ReactPaginate
        previousLabel={"«"}
        breakLabel={"..."}
        nextLabel={"»"}
        pageCount={props.total_pages}
        containerClassName={"page-controller"}
        pageClassName={"page-controller-item"}
        activeClassName={"active"}
        previousClassName={"page-controller-item"}
        previousLinkClassName={"page-controller-link"}
        nextClassName={"page-controller-item"}
        nextLinkClassName={"page-controller-link"}
        disabledLinkClassName={"page-controller-disabled"}
        onPageChange={handleClick}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    total_pages: state.requestMoviesResult.movies.total_pages,
  };
};

export default connect(mapStateToProps)(Pagination);
