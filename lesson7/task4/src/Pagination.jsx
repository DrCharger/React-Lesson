import React from 'react';

const Pagination = props => {
  console.log(props);
  let isPrevPageAvailable;
  if (props.currentPage === 1) {
    isPrevPageAvailable = <button className="btn" onClick={props.goPrev} disabled></button>;
  } else {
    isPrevPageAvailable = (
      <button className="btn" onClick={props.goPrev}>
        ←
      </button>
    );
  }

  let isNextPageAvailable =
    (props.totalItems % 3 === 0 &&
      props.totalItems - props.currentPage * props.itemsPerPage < props.itemsPerPage) ||
    (props.totalItems % 3 !== 0 && props.totalItems - props.currentPage * props.itemsPerPage < 0);

  let button;

  if (isNextPageAvailable) {
    button = <button className="btn" onClick={props.goNext} disabled></button>;
  } else {
    button = (
      <button className="btn" onClick={props.goNext}>
        →
      </button>
    );
  }

  return (
    <div className="pagination">
      {isPrevPageAvailable}
      <span className="pagination__page">{props.currentPage}</span>
      {button}
    </div>
  );
};

export default Pagination;
