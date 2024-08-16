export const setItemToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
export const getItemToLocalStorage = (key: string): any | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  
export function setCookie(name:string, value:string, days:number, isHttpOnly:boolean = false) {
    const expires = days ? `expires=${new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString()}` : '';
    const httpOnlyFlag = isHttpOnly ? 'HttpOnly' : '';
    const secureFlag = 'Secure'; 
  
    document.cookie = `${name}=${encodeURIComponent(value)}; ${expires}; path=/; ${secureFlag}; ${httpOnlyFlag}`;
  }
  
  export function getCookie(name:string) {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');
  
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') cookie = cookie.substring(1);
      if (cookie.indexOf(nameEQ) === 0) return decodeURIComponent(cookie.substring(nameEQ.length));
    }
    return null;
  }
  