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
        loading: false,
        unauthorized: true,
      },
    },
  },
  setAuthData: () => {}
};

const AuthContext = createContext<AuthContextType>(defaultAuthContextValue);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authData, setAuthData] = useState<AUTHIA>(defaultAuthContextValue.authData);

  useEffect(() => {
    const fetchAuthData = async () => {
      const authToken = localStorage.getItem("userProfile");

      setAuthData({
        profile: {
          data: {
            login: false,
            loading: true,
            unauthorized: true,
          }
        }
      });

      try {
        const response = await fetch("https://duoword.onrender.com/user", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          }
        });
        const data: ResponseDTOS = await response.json();

        if (data.status) {
          setAuthData({
            profile: {
              data: {
                login: true,
                loading: false,
                unauthorized: false,
                img: data.user[0].image,
                name: data.user[0].name,
                email: data.user[0].email,
              }
            }
          });
        } else {
        
          setAuthData({
            profile: {
              data: {
                login: false,
                loading: false,
                unauthorized: false,
              }
            }
          });

         
          setTimeout(() => {
            setAuthData(prev => ({
              profile: {
                data: {
                  ...prev.profile.data,
                  unauthorized: true,
                }
              }
            }));
          }, 2500);
        }

      } catch (e) {
        // Handle error
        setAuthData({
          profile: {
            data: {
              login: false,
              loading: false,
              unauthorized: false,
            }
          }
        });
      }
    };

    fetchAuthData();
  }, []);

  return (
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
