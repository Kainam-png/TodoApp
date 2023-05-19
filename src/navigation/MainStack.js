import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../pages/LoginScreen';
import DashScreen from '../pages/DashScreen';
import CreateTask from '../pages/CreateTask'
import CadastroScreen from '../pages/CadastroScreen'
import DescricaoScreen from '../pages/DescricaoScreen'


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
                <MainStack.Screen 
                    name="CreateTask"
                    component={CreateTask}
                    options={{headerShown: false}}
                />
                <MainStack.Screen 
                    name="CadastroScreen"
                    component={CadastroScreen}
                    options={{headerShown: false}}
                />
                <MainStack.Screen 
                    name="DescricaoScreen"
                    component={DescricaoScreen}
                    options={{headerShown: false}}
                />
    </MainStack.Navigator>
  );
};
export default MainStackNavigator;
