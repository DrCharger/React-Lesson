import React, { Component, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const User = () => {
//   const { userId } = useParams();

//   const [userData, setData] = useState(null);

//   const fetchUser = () => {
//     fetch(`https://api.github.com/users/${userId}`)
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw new Error();
//       })
//       .then(data => setData(data));
//   };

//   useEffect(() => {
//     fetchUser();
//   }, [productId]);
//   if (!userData) {
//     return null;
//   }

//   const { avatar_url, name, location } = userData;
//   return (
//     <div className="user">
//       <img alt="User Avatar" src={avatar_url} className="user__avatar" />
//       <div className="user__info">
//         <span className="user__name">{name}</span>
//         <span className="user__location">{location}</span>
//       </div>
//     </div>
//   );
// };

class User extends Component {
  state = {
    userData: null,
  };
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    const prevUser = prevProps.match.params.userId;
    const currentUser = this.props.match.params.userId;

    if (prevUser !== currentUser) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const { match } = this.props;
    fetch(`https://api.github.com/users/${match.params.userId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(userData => this.setState({ userData }));
  };
  render() {
    if (!this.state.userData) {
      return null;
    }
    const { avatar_url, name, location } = this.state.userData;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}
export default User;
