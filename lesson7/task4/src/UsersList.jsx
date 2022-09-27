import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
  state = {
    page: 1,
    prev: 0,
    perPage: 3,
  };
  goPrev = () => {
    this.setState({
      page: this.state.page - 1,
      prev: this.state.prev - this.state.perPage,
    });
  };
  goNext = () => {
    this.setState({
      page: this.state.page + 1,
      prev: this.state.prev + this.state.perPage,
    });
  };
  render() {
    let a = this.props.users.slice(this.state.prev, this.state.prev + this.state.perPage);
    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.page}
          totalItems={a.length}
          itemsPerPage={this.state.perPage}
        />
        <ul className="users">
          {a.map(el => (
            <User key={el.id} {...el} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
