export const setDB = (key, value) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const getDB = (key) => {
  return JSON.parse(window.sessionStorage.getItem(key));
};
