import React, { useState, useEffect } from 'react';

import { Animated, SafeAreaView, Text, View, ImageBackground, StyleSheet, Image, TextInput, backgroundColor, TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';




const Stack = createStackNavigator();

function Fala34({ route, navigation }) {
  
  const { text } = route.params;
   

    return (    
    <SafeAreaView style={styles.container}>
      <ImageBackground
      style={styles.container}
      source={require("../../assets/Cenario2.jpg")}>    
      <View style={{
            AlignItems: 'center',
            position: 'absolute'
          }}>
      <View style={{flexDirection: 'row'}}>
      

      <Image style={{  height: 200,
            width: 800, top: 205, position: 'absolute', resizeMode:"contain"}} 
      source={require('../../assets/CaixaDialogo3.png')} />
    
    <View style={{flex:1, flexDirection:'row', position: 'absolute'}}>
    <Text style={{fontSize: 20, color: "black", top:240, position: 'absolute', left: 80}}>Nina</Text>
    <Text style={{fontSize: 16, color: "black", top: 265, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>     A partir desse sistema, vamos preencher todas as partes necessárias para jogar</Text>
        <Text style={{fontSize: 16, color: "black", top: 280, position: 'absolute', left: "12%", fontFamily: 'LangarRegular'}}>com o seu personagem</Text>
    </View>             
   
   <TouchableOpacity style={{top: 280, position: 'absolute', left: 720}} onPress={() => {navigation.navigate('Fala35'   , { text: text})}}>
    <Image style={{  height:40, width: 70, resizeMode:"contain"}} 
    source={require('../../assets/setad.png')} /> 
   </TouchableOpacity>

   <TouchableOpacity style={{top: 275, position: 'absolute', left:-25}} onPress={() => {
          navigation.navigate('Fala33'   , { text: text})}}>
    <Image style={{  height:40, width: 70, resizeMode:"contain"}} 
    source={require('../../assets/setae.png')} /> 
   </TouchableOpacity>
      </View>      
      </View>
      </ImageBackground>   
    </SafeAreaView>
  );
  }

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode:"contain",
    backgroundColor:"#000000"
   
  }
});
export default Fala34;