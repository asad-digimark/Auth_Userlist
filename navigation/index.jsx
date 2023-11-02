import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from '../auth/AuthProvider';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {useAuthContext} from '../auth/AuthProvider';

export default () => {
  const {user} = useAuthContext();

  console.warn('user stack = ', user);

  return (
    <AuthProvider>
      <NavigationContainer>
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthProvider>
  );
};
