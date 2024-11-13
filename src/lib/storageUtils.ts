export const getItemFromStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
export const logoutUser = () => {
  localStorage.clear();

  // Trigger a custom event to notify localStorage changes
  const storageEvent = new Event('user-logout');
  window.dispatchEvent(storageEvent);
};

const appStorage = (key: string) => {
  const getItem = () => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  const setItem = (value: any) => {
    const valueString = JSON.stringify(value);
    return localStorage.setItem(key, valueString);
  };
  const unSetItem = () => setItem(null);

  const removeItem = () => {
    return localStorage.removeItem(key);
  };
  const clear = () => {
    localStorage.clear();
  };

  return {
    getItem,
    setItem,
    unSetItem,
    removeItem,
    clear,
  };
};

export default appStorage;
