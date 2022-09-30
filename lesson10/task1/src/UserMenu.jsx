import React from 'react';

const UserMenu = props => {
  const { userData } = props;
  if (!userData) {
    return null;
  }

  const { avatar_url, name } = userData;
  return (
    <div class="menu">
      <span class="menu__greeting">{`Hello, ${name}`}</span>
      <img alt="User Avatar" src={avatar_url} class="menu__avatar" />
    </div>
  );
};

export default UserMenu;
