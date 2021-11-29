import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Image } from "react-native";
const logo = {
  uri: "https://www.kindpng.com/picc/m/192-1925162_login-icon-png-transparent-png.png",
};

const Login = ({ navigation }) => {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const validarUser = () => {

    if (user == "karen" && password == "1234") {
      alert("contrase;a correcta");
      navigation.navigate("tarea");
    } 
    else {
      alert("contrase;a incorrecta");
    }
  };

  const cambiarForm = () => {

    navigation.navigate("calculo");
  };

  return (
    
    <View style={styles.container}>
      <View style={styles.logoheader}>
          <Image style={styles.logo} source={logo} />
      </View>

      <Text style={styles.text}>Usuario</Text>

      <TextInput
        style={styles.inputs}
        placeholder={"Ingrese su gmail"}
        onChangeText={setUser}
      />

      <Text style={styles.text}>Contraseña</Text>

      <TextInput
        style={styles.inputs}
        placeholder={"ingrese su contrasenia "}
        onChangeText={setPassword}
      />

      <View style={styles.button}>

        <Button title="iniciar" onPress={validarUser} />

      </View>
      
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: "#F2F8FB",
    borderRadius: 8,
    padding: 10,
    textAlign: "right",
    fontSize: 22,
    fontWeight: "bold",
    color: "#004445",
    marginTop: 10,
    borderWidth:3
  },
  text: {
    fontSize: 34,
    color: "#05786A",
  },
  button: {
    color: "#C4C4C4",
    marginTop: 40,
  },
  container: {
    marginTop:'20%',
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo:{ 
    width: 150,
    height: 150, 
  },
    logoheader:{
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical:50
  },
});
