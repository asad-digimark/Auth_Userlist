import {createContext, useState, useContext, useEffect} from 'react';
import Navigation from '../navigation';
import AuthStack from '../navigation/AuthStack';
import AppStack from '../navigation/AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export default () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('_user')
      .then(data => {
        if (data) setUser(data);
        setLoading(false);
      })
      .catch(e => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <AuthContext.Provider
      value={{
        user,
        login: (email, password) => {
          setUser(email);
          AsyncStorage.setItem('_user', email);
        },
        logout: () => {
          setUser();
          AsyncStorage.removeItem('_user');
        },
      }}>
      <Navigation>{user ? <AppStack /> : <AuthStack />}</Navigation>
    </AuthContext.Provider>
  );
};
