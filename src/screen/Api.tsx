import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";

const Api = () => {
  const [usuario, setUsuario] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = async () => {
    const peticion = await fetch("https://hidfzr.deta.dev/");

    const datos = await peticion.json();
    setUsuarios(datos.data);
  };
  const crearUsuarios = async () => {
    const form = {
      user_id: 1,
      tweet_text: usuario,
    };
    const peticion = await fetch(`https://hidfzr.deta.dev/tweets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    getUsuarios();
  };

  const eliminarUsuario = async (id: number) => {
    const peticion = await fetch(`https://hidfzr.deta.dev/tweets/${id}`, {
      method: "DELETE",
    });
    getUsuarios();
  };
  const actualizarUsuario = async (id: number) => {
    const form = {
      tweet_text: "Actualizado....",
    };
    const peticion = await fetch(`https://hidfzr.deta.dev/tweets/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    getUsuarios();
  };
  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <View style={styles.containerBase}>
      <ScrollView>
        <View style={styles.container}>
          <TextInput style={styles.inputs} onChangeText={setUsuario} />
          <Button title="Agregar" onPress={() => crearUsuarios()} />
        </View>
        {usuarios.map((lista) => (
          <View style={styles.container} key={lista.id}>
            <Text style={styles.text}>{lista.tweet_text}</Text>
            <View>
              <Button
                color="#bd0404"
                title="ELiminar"
                onPress={() => eliminarUsuario(lista.id)}
              />
              <Button
                color="#0aa81d"
                title="Actualizar"
                onPress={() => actualizarUsuario(lista.id)}
              />
            </View>
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
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 10,
    marginLeft: 10,
    borderWidth: 3,
    marginTop: 10,
  },
  text: {
    fontSize: 24,
    color: "#ffffff",
  },
  containerBase: {
    flex: 1,
    backgroundColor: "#0b3054",
  },
  inputs: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 10,
    fontSize: 22,
    color: "#034C50",
    width:'70%'
  },

});
