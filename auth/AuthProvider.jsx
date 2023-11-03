import {createContext, useState, useContext, useEffect} from 'react';
import Navigation from '../navigation';
import AuthStack from '../navigation/AuthStack';
import AppStack from '../navigation/AppStack';
import auth from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native';

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
            ToastAndroid.show(e.code, ToastAndroid.SHORT);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
            ToastAndroid.show('User created successfully', ToastAndroid.SHORT);
          } catch (e) {
            ToastAndroid.show(e.code, ToastAndroid.SHORT);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
            ToastAndroid.show('User signed out!', ToastAndroid.SHORT);
          } catch (e) {
            ToastAndroid.show(e.code, ToastAndroid.SHORT);
          }
        },
      }}>
      <Navigation>{user ? <AppStack /> : <AuthStack />}</Navigation>
    </AuthContext.Provider>
  );
};
