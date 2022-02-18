const setHeader = (users = []) => {
  const newUsers = [...users];

  newUsers[0].header = newUsers[0].login[0]; // 처음엔 헤더가 무조건 붙기떄문.

  for (let i = 1; i < newUsers.length; i++) {
    if (newUsers[i].login[0] !== newUsers[i - 1].login[0]) {
      newUsers[i].header = newUsers[i].login[0];
    }
  }
  return newUsers;
};

export default setHeader;
