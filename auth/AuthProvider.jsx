import {createContext, useState, useContext, useEffect} from 'react';
import Navigation from '../navigation';
import AuthStack from '../navigation/AuthStack';
import AppStack from '../navigation/AppStack';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export default () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return auth().onAuthStateChanged(user => {
      setUser(user);
      if (loading) setLoading(false);
    });
  }, []);

  if (loading) return null;

  return (
    <AuthContext.Provider
      value={{
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.error(e.code);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            console.warn('User created successfully');
          } catch (e) {
            console.error(e.code);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
            console.warn('User signed out!');
          } catch (e) {
            console.error(e.code);
          }
        },
      }}>
      <Navigation>{user ? <AppStack /> : <AuthStack />}</Navigation>
    </AuthContext.Provider>
  );
};
