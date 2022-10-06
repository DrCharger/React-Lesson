import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { productId } = useParams();

  const [userData, setData] = useState(null);

  const fetchUser = () => {
    fetch(`http://api.github.com/users/${productId}`)
      .then(response => response.json())
      .then(data => setData(data));
  };

  useEffect(() => fetchUser(), [productId]);
  if (userData === null) {
    return null;
  }

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
