const pattern = {
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
};

export const isValidRegExp = (id, value) => {
  const regex = new RegExp(pattern[id]);
  return regex.test(value);
};
