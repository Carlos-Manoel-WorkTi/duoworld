export const setItemToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
export const getItemToLocalStorage = (key: string): any | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  