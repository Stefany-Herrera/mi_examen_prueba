import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';

const ListasTarea = ({navigation}) => {
    const [usuario, setUsuario] = useState([

        
            {
                "id": 1,
                "name": "Leanne Graham"
            },
            {
                "id": 2,
                "name": "Ervin Howell",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
            },
            {
                "id": 2,
                "name": "Ervin Howell",
            },
        ])
        const eliminarTareas = () =>{
            alert('si')
        }
        const editarTareas =()=>{
            alert("editar")
        }

    
    return (    
    <View>
      <Text>HOLA BEBE</Text>
{/*creando un arreglo*/}
      {
          usuario.map(lista =>(
           <View style={styles.container}>
            <Text style={styles.text} key={lista.id}>{lista.name}</Text>
            <Button
            title="eliminar"
            onPress={eliminarTareas}
          />
          {/* <Button
            title="editar"
            onPress={editarTareas}
          /> */}
          </View>

          ))
      }
       
        
        </View>
    )
}
export default ListasTarea

const styles = StyleSheet.create({
   
    container:{
        width:'95%',
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#34d2eb',
        marginBottom:15,
        paddingVertical:10,
        paddingHorizontal:8,
        borderRadius:5,
        marginLeft:10

    },
    text:{
        fontSize:24
    },


})
   



