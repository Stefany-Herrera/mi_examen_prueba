import React,{useState, } from 'react'
import { Button, StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';
const logo = {
    uri: "https://thumbs.gfycat.com/BestMeagerHoki-size_restricted.gif",
  };

const Separator = () => (
    <View style={styles.separator} />
  );
  
  
const Menu = ( {navigation }) => {
    
    const newform = ()=>{
        navigation.navigate('Atributo')
    }
    const newform2 = ()=>{
        navigation.navigate('Login')
    }   

    const newform3 = ()=>{
      navigation.navigate('Api')

  }  
  const newform4 = ()=>{
    navigation.navigate('calculo')
  }
    return (
        <View style={styles.container}>
             <View style={styles.logoheader}>
          <Image style={styles.logo} source={logo} />
      </View>

            
            <View style={styles.fixToText}>
                 <Separator />
        <Button
          title="NicaAtributo"
          onPress={newform}
        />
         <Separator />
        <Button
          title="Login"
          onPress={newform2}
        />
       <Separator />
       <Button
          title="Api"
          onPress={newform3}
        /> 
        <Button
          title="Liquidacion"
          onPress={newform4}
        /> 
    </View>
    </View>
       
    )
}

export default Menu

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      justifyContent: 'center',
     
      marginTop:'1%',
      backgroundColor:'#0f0e14'
    },
      
    title: {
      textAlign: 'center',
      marginVertical: 8,
      
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    logo:{ 
        width: 400,
        height: 400, 
        marginTop:1
      },
        logoheader:{
        justifyContent: 'center',
        alignItems: 'center',
        
      },
   })