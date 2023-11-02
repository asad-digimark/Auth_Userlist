import {NavigationContainer} from '@react-navigation/native';

import AuthStack from './AuthStack';

export default () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
