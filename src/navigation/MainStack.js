import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../pages/LoginScreen';
import DashScreen from '../pages/DashScreen';
import CreateTask from '../pages/CreateTask'
import CadastroScreen from '../pages/CadastroScreen'
import DescricaoScreen from '../pages/DescricaoScreen'


const MainStack = createNativeStackNavigator();
const headerOptions = {
    headerStyle: {
      backgroundColor: '#027386', // cor de fundo do cabeçalho
    },
    headerTintColor: 'white', // cor do texto do cabeçalho
    headerTitleStyle: {
      fontWeight: 'bold', // estilo do texto do título
    },
  };
const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
    screenOptions={{
        headerStyle: headerOptions.headerStyle,
        headerTintColor: headerOptions.headerTintColor,
        headerTitleStyle: headerOptions.headerTitleStyle,
      }}
    >
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
                    options={{headerShown: true,title:'Descrição da tarefa'}}
                    
                />
    </MainStack.Navigator>
  );
};
export default MainStackNavigator;
