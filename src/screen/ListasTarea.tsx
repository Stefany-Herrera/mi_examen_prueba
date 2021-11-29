import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";

const ListasTarea = ({ navigation }) => {
  

    const [tarea, setTarea] = useState<string>('')
    const [listTareas, setListTareas] = useState<string[]>([])


    const crearTarea = () => {
       setListTareas([... listTareas,tarea])
    }
    
    const eliminarTarea = (id:number) => {
        listTareas.splice(id,1)
        getTareas()
    }
    const getTareas = () =>{
      setListTareas([...listTareas])
    }
    const getUser =() => {
      alert(listTareas)
  }
  useEffect ( getTareas ,  [ ] )
   

  return (
    
    <View style={styles.containerBase}>
      <ScrollView>
      
       <View style={styles.container}>
        
        <TextInput
          style={styles.inputs}
          placeholder={"ingrese el Usuario "}
          onChangeText={setTarea}
        />
        <Button color="#fcba03" title="Agregar" onPress={crearTarea} />
       </View>
        {/* creando un arreglo */}
       {listTareas.map((lista,index) => (
        <View style={styles.container} key={index}>
          <Text style={styles.text}>{lista}</Text>

          <Button
            color="#fcba03"
            title="eliminar"
            onPress={() => eliminarTarea(index)}
          />
          {/* <Button title="editar" onPress={editarTareas} /> */}
        </View>
      ))}
      <Button title="Ver datos" onPress={getUser} />
      </ScrollView>
    </View>
    
  );
  
};
export default ListasTarea;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#0cedb9",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 9,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 3,
    borderColor: "#e61d02",
  },
  text: {
    fontSize: 24,
  },
  containerBase: {
    flex: 1,
    backgroundColor: "#0cedb9",
  },
  inputs: {
    backgroundColor: "#F2F8FB",
    borderRadius: 8,
    padding: 16,
    textAlign: "right",
    fontSize: 22,
    fontWeight: "bold",
    color: "#004445",
  },
});
