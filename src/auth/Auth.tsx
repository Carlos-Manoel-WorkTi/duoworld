// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AUTHIA } from './DTOs/AuthDTOS';
import { getCookie, setCookie } from '../storage/localStorage';


interface AuthContextType {
  authData: AUTHIA;
  setAuthData: (data: AUTHIA) => void; 
}

setCookie('authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJkdW93b3JkIiwic3ViIjoidGVzdGVAZ21haWwuY29tIiwiZXhwIjoxNzIzNjI3ODA1fQ.8JYJOVkTHOMOrIzPTycjs65L3IhxBhFI3yfz-_GYa3I', 200, true)


const authToken = getCookie('authToken');
const userEmail = getCookie('userEmail');
const userPass = getCookie('userPass');


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


export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authData, setAuthData] = useState<AUTHIA>(defaultAuthContextValue.authData);
  
  
//  fetch("https://duoword.onrender.com/auth/register", {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${authToken}`
//     },
//     body: JSON.stringify({
//       "email": userEmail,
//       "senha":userPass
//     })
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     // const response_fr: AuthContextType = {
//     //   authData: {
//     //     profile: {
//     //       data: {
//     //         login: response != "" ? true : false
//     //       },
//     //     },
//     //   }
//     // };

//     console.log(response.json());
    
//   })
//   .then(data => {
//     console.log('Success:', data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
  // const response_fr: AuthContextType = {
  //   authData: {
  //     profile: {
  //       data: {
  //         login: false,
  //         img: "",
  //         name: "",
  //         email: ""
  //       },
  //     },
  //   }
  // };
  


  useEffect(() => {
    

    const fetchAuthData = async () => {
      // Recuperar as informações do usuário armazenadas no localStorage
      const storedProfile = localStorage.getItem('userProfile');
    
      if (storedProfile) {
        // Parse o JSON armazenado para um objeto
        const profileData = JSON.parse(storedProfile);
    
        // Atualizar o estado com os dados recuperados
        setAuthData({
          profile: {
            data: profileData
          }
        });
      } else {
        
        const defaultResponse: AUTHIA = {
          profile: {
            data: {
              login: false,
              img: "",
              name: "",
              email: ""
            }
          }
        };
    
        // Simular um atraso para o retorno padrão
        await new Promise(resolve => setTimeout(resolve, 500));
    
        setAuthData(defaultResponse);

        
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
