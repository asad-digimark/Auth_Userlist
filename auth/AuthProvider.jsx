import {createContext, useState, useContext} from 'react';

export const AuthContext = createContext({});
export const useAuthContext = () => useContext(AuthContext);

export default ({children}) => {
  const [user, setUser] = useState(null);

  console.log('child = ', children);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: (email, password) => {
          setUser(email);
        },
        logout: () => setUser(null),
      }}>
      {children}
    </AuthContext.Provider>
  );
};
