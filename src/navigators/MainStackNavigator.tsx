import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Liquidacion from '../screen/Liquidacion';
import ListasTarea from '../screen/ListasTarea';
import Login from '../screen/Login';


// menu de navegacion
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="tarea">
  {/* en la paret  */}
          <Stack.Screen name="Login" component={Login}/>

           <Stack.Screen name="tarea" component={ListasTarea}
           options={{headerStyle:
            {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
          }}/> 
          
           <Stack.Screen name="calculo" component={Liquidacion}/> 
           
  
        </ Stack.Navigator>
      </NavigationContainer>
    )
}

export default MainStackNavigator



