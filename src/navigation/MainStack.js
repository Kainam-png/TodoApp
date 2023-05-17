import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../pages/LoginScreen';
import DashScreen from '../pages/DashScreen';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
       <MainStack.Screen 
                    name="Login"
                    component={LoginScreen}
                    options={{headerShown: false}}
                />
                <MainStack.Screen 
                    name="Dash"
                    component={DashScreen}
                    options={{headerShown: false}}
                />
    </MainStack.Navigator>
  );
};
export default MainStackNavigator;
