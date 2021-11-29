import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import FormImputs from '../compnents/FormImputs';

const NicaAtributo = () => {
    const [producto, setProducto] = useState<String>('')
    const [precio,setPrecio] = useState<string>('')
    const [descuento,setDescuento] = useState<string>('')
    const [cantidad,setCantidad] = useState<string>('')
    const [resultado,setResultado] = useState<number>(0)

    const calcularVenta =() =>{

        let calculo = parseFloat(cantidad) * parseFloat(precio)
        let descuents = calculo * parseFloat(descuento) / 100
        let result = calculo - descuents
        setResultado(result)

    }
   
    
    return (
        <View style={styles.container}>
            <FormImputs
            title={"Nombre producto"}
            placeholder={"Producto"}
            onChangeText={setProducto}
            />
            <FormImputs
            title={"Cantidad"}
            placeholder={"Cantidad"}
            onChangeText={setCantidad}
            />
            <FormImputs
            title={"Precio del producto"}
            placeholder={"$"}
            onChangeText={setPrecio}
            />
             <FormImputs
            title={"descuento del producto"}
            placeholder={"descuento"}
            onChangeText={setDescuento}
            />
      
      <TouchableOpacity
                onPress={calcularVenta}
                style={styles.botonReset}
            >
                <Text style={styles.textbotonReset}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.text}>La compra de {producto} es de{resultado}</Text>
      
        </View>
        
    )
}

export default NicaAtributo

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: "#F2F8FB",
        borderRadius: 8,
        padding: 10,
        textAlign: "right",
        fontSize: 22,
        fontWeight: "bold",
        color: "#004445",
      },
      text: {
        fontSize: 25,
        color: "#034C50",
      },
    container: {
        flex:1,
      backgroundColor: "#a2e8",
      width:'95%',
      marginLeft:10,

    },
    botonReset: {
        backgroundColor: '#c1eb09',
        borderRadius: 8,
        width: '100%',
        paddingVertical: 7,
        marginTop: 10,

    },
    textbotonReset: {
        color: '#00514E',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    }
})