import { NavigationContainer } from '@react-navigation/native';
import {
  type NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import { HeaderLogo } from '../components/Header.Logo';
import { COLORS } from '../constants/theme';
import { OnboardingScreen } from '../screens/Onboarding.Screen';
import { SignUpScreen } from '../screens/SignUp.Screen';

const Stack = createNativeStackNavigator();

const screenOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerShadowVisible: false,
  headerTitle: () => <HeaderLogo />,
  headerTintColor: COLORS.white,
  headerTitleAlign: 'center',
  headerTransparent: true,
};

export function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.background} style="light" />
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={OnboardingScreen} />
        <Stack.Screen
          options={{
            presentation: 'modal',
          }}
          name="SignUp"
          component={SignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
