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

  let isNextPageAvailable;
  //   if (props.itemsPerPage >= props.totalItems) {
  //     isNextPageAvailable = <button className="btn" onClick={props.goNext} disabled></button>;
  //   } else {
  //     isNextPageAvailable = (
  //       <button className="btn" onClick={props.goNext}>
  //         →
  //       </button>
  //     );
  //   }
  if (props.itemsPerPage > props.totalItems) {
    isNextPageAvailable = <button className="btn" onClick={props.goNext} disabled></button>;
  } else {
    isNextPageAvailable = (
      <button className="btn" onClick={props.goNext}>
        →
      </button>
    );
  }

  return (
    <div className="pagination">
      {isPrevPageAvailable}
      <span className="pagination__page">{props.currentPage}</span>
      {isNextPageAvailable}
    </div>
  );
};

export default Pagination;
