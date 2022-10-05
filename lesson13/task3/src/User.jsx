import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [userData, setData] = useState(null);
  const { productId } = useParams();
  console.log(productId);
  const fetchUser = () => {
    fetch(`http://api.github.com/users/${productId}`)
      .then(response => response.json())
      .then(data => setData(data));
  };
  useEffect(() => {
    fetchUser();
  }, []);
  if (userData === null) {
    return null;
  }
  console.log(userData.name);
  const { avatar_url, name, location } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};

export default User;