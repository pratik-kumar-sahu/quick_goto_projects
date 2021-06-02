const useStateClone = (user) => {
  if (typeof user === typeof []) {
    const defaultVal = user;
    const setTodo = (newUser) => {
      defaultVal.push(newUser);
    };
    return [defaultVal, setTodo];
  } else {
    let defaultVal = user;
    const setText = (newUser) => {
      defaultVal = newUser;
    };
    return [defaultVal, setText];
  }
};

export default useStateClone;
