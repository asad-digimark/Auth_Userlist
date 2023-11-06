import {createContext, useState, useContext, useEffect} from 'react';
import Navigation from '../navigation';
import AuthStack from '../navigation/AuthStack';
import AppStack from '../navigation/AppStack';
import auth from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '241484266519-f2pkauph5l682dgma04chne736h56ru4.apps.googleusercontent.com',
});

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
        user,
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
        handleGoogleLogin: async () => {
          try {
            const res = await GoogleSignin.hasPlayServices({
              showPlayServicesUpdateDialog: true,
            });
            const {idToken} = await GoogleSignin.signIn();
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);
            return auth().signInWithCredential(googleCredential);
          } catch (e) {
            console.error(e);
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
