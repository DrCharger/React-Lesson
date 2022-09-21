const UserAge = props => {
  const a = new Date().getMonth() + 1;
  const b = new Date(props).getMonth();
  const dif = new Date().getFullYear() - new Date(props).getFullYear();

  return a > b ? dif : dif - 1;
};

export default UserAge;
