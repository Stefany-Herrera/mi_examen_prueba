import React, { useState,  useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const Api = () => {
  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = async () => {
    // async otzea asyncrona devolvera un objeto
  const peticion = await fetch("https://jsonplaceholder.typicode.com/users");

  const datos = await peticion.json();
    setUsuarios(datos);
  }
  useEffect(()=> {getUsuarios ()}, [])
  return (
    <View style={styles.containerBase}>
        <ScrollView>
       {
       usuarios.map((lista) => (
          <View style={styles.container}>
            <Text style={styles.text}>{lista.address.street}</Text>
          </View>
        ))}
        </ScrollView>
    </View>
  );
};
export default Api;
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
      }
})
