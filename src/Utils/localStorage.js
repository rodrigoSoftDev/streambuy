export const readObject = key => JSON.parse(getKey(key) || "{}");
  
export const setObject = (key, value) => setKey(key, JSON.stringify(value));

export const getKey = key => localStorage.getItem(key);
  
export const setKey = (key, value) => localStorage.setItem(key, value);

export const deleteKey = (key) => localStorage.removeItem(key);
  