import React from 'react';
import Comment from './Comment';

const UserInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com/avatar',
};

const App = () => {
  return <Comment author={UserInfo} text="Good job!" date={new Date()} />;
};
export default App;
