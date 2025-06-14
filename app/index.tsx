import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import CreateAccount from './pages/auth/CreateAccount';
import ForgotPassword from './pages/auth/ForgotPassword';
import LoginScreen from './pages/auth/Login';
import NewPassword from './pages/auth/NewPassword';
import SignUp from './pages/auth/SignUp';
import WelcomeScreen from './pages/welcome';

const Stack = createNativeStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'Unbounded-Regular': require('../assets/fonts/Unbounded-Regular.ttf'),
    'OpenSans-Regular': require('../assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('../assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    fetchFonts().then(() => setFontsLoaded(true));
  }, []);

  return (
    <Stack.Navigator initialRouteName='SignUp'>
      <Stack.Screen
        name={'SignUp'}
        component={SignUp}
        options={{ statusBarHidden: true, headerShown: false }}
      />
      <Stack.Screen
        name={'Login'}
        component={LoginScreen}
        options={{ statusBarHidden: true, headerShown: false }}
      />
      <Stack.Screen
        name={'Create Account'}
        component={CreateAccount}
        options={{ statusBarHidden: true, headerShown: false }}
      />
      <Stack.Screen
        name={'Forgot Password'}
        component={ForgotPassword}
        options={{ statusBarHidden: true, headerShown: false }}
      />
      <Stack.Screen
        name={'New Password'}
        component={NewPassword}
        options={{ statusBarHidden: true, headerShown: false }}
      />
      <Stack.Screen
        name={'Welcome'}
        component={WelcomeScreen}
        options={{ statusBarHidden: true, headerShown: false }}
      />
    </Stack.Navigator>
  );
}
