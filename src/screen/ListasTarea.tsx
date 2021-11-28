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
    <View style={styles.containerBase}>
      
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
        backgroundColor:'#0cedb9',
        marginBottom:15,
        paddingVertical:10,
        paddingHorizontal:8,
        borderRadius:9,
        marginLeft:10,
        marginTop:10,
        borderWidth:3,
        borderColor:'#e61d02'


    },
    text:{
        fontSize:24
    },
    containerBase:{
        flex:1,
        backgroundColor:'#0cedb9',
        
        
    }


})
   



