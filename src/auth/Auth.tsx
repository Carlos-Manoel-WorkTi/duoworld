// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AUTHIA } from './DTOs/AuthDTOS';
import { ResponseDTOS } from './DTOs/ResponseDTOS';


interface AuthContextType {
  authData: AUTHIA;
  setAuthData: (data: AUTHIA) => void; 
}


const defaultAuthContextValue: AuthContextType = {
  authData: {
    profile: {
      data: {
        login: false,
      },
    },
  },
  setAuthData: () => {}
};

const AuthContext = createContext<AuthContextType>(defaultAuthContextValue);


export const AuthProvider: React.FC<{ children: ReactNode }> =  ({ children }) => {
  const [authData, setAuthData] = useState<AUTHIA>(defaultAuthContextValue.authData);
  

  useEffect(() => {
    

    const fetchAuthData = async () => {
   
      const authToken = localStorage.getItem("userProfile");
     
      
      try{
        const response = await fetch("https://duoword.onrender.com/user", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          }
        })
        const data: ResponseDTOS = await response.json();

        if(data.status){
            setAuthData({
              profile: {
                data:{
                  login:true,
                  img:data.user[0].image,
                  name:data.user[0].name,
                  email:data.user[0].email,
                }
              }
            })
        }

        
      }catch(e){
        throw new Error("Error ao autentificar")
      }
    
    };
    

    fetchAuthData();
  }, []);

  return (
    <AuthContext.Provider value={{ authData,setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
