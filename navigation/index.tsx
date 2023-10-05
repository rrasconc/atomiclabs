import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HeaderLogo } from '../components/Header.Logo';
import { COLORS } from '../constants/theme';
import { OnboardingScreen } from '../screens/Onboarding.Screen';
import { SginUpScreen } from '../screens/SginUp.Screen';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: COLORS.background,
  },
  headerShadowVisible: false,
  headerTitle: () => <HeaderLogo />,
};

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={OnboardingScreen} />
        <Stack.Screen
          options={{
            presentation: 'modal',
          }}
          name="SignUp"
          component={SginUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
