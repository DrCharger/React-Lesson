import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [fulldata, setData] = useState(null);

  const { productId } = useParams();

  const fetchDetails = () => {
    fetch(`http://api.github.com/users/${productId}`)
      .then(response => response.json())
      .then(data => setData(data));
  };

  useEffect(() => {
    fetchDetails();
  });

  if (fulldata === null) {
    return null;
  } else {
    const { avatar_url, name, location } = fulldata;

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
};

export default User;
