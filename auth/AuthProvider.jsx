import {createContext, useState, useContext} from 'react';
import Navigation from '../navigation';
import AuthStack from '../navigation/AuthStack';
import AppStack from '../navigation/AppStack';

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export default () => {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider
      value={{
        user,
        login: email => setUser(email),
      }}>
      <Navigation>{user ? <AppStack /> : <AuthStack />}</Navigation>
    </AuthContext.Provider>
  );
};
