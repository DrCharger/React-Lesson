import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component {
  state = {
    page: 1,
    prev: 0,
    next: 3,
    perPage: 3,
  };
  goPrev = () => {
    this.setState({
      page: this.state.page - 1,
      prev: this.state.prev - this.state.perPage,
      next: this.state.next - this.state.perPage,
    });
  };
  goNext = () => {
    this.setState({
      page: this.state.page + 1,
      prev: this.state.prev + this.state.perPage,
      next: this.state.next + this.state.perPage,
    });
  };
  render() {
    let a = this.props.users.slice(this.state.prev, this.state.next);
    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.page}
          totalItems={this.props.users.length}
          itemsPerPage={this.state.next}
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
