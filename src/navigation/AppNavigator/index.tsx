import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import AuthScreen from '../../screens/auth/AuthScreen';
import ProductDetail from '../../screens/ProductDetails';
import SplashScreen from '../../screens/SplashScreen';

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    ProductDetail: { productId: number };
    SplashScreen: undefined;
  };

  const Stack = createNativeStackNavigator<RootStackParamList>();

  const AppNavigator = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={AuthScreen} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true}}/>
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  export default AppNavigator;