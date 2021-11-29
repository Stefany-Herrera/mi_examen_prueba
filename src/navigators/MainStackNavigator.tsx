import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Liquidacion from '../screen/Liquidacion';
import ListasTarea from '../screen/ListasTarea';
import Login from '../screen/Login';
import NicaAtributo from '../screen/NicaAtributo';
import Api from '../screen/Api';


// menu de navegacion
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="tarea">
  {/* en la paret  */}
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Api" component={Api}/>

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
          
           
           <Stack.Screen name="calculo" component={Liquidacion}
            options={{headerStyle:
                {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
              }}/>
           <Stack.Screen name="Atributo" component={NicaAtributo} 
            options={{headerStyle:
                {
                  backgroundColor: '#c1eb09',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
              }}/>
           
  
        </ Stack.Navigator>
      </NavigationContainer>
    )
}

export default MainStackNavigator



