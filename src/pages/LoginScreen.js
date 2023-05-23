import React, {useState} from 'react';
import {Button, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import * as Icon from 'react-native-feather';
// import SQLite from 'react-native-sqlite-storage'




const HomeScreen = () => {
  const [nome, setNome] = useState('');
  const navigation = useNavigation();
  const handleClick = () => {
    //navegacao
    navigation.navigate('Dash', {nome: nome});
  };
  return (
    <LinearGradient
      colors={['#027399', '#07AFE6', '#21C8FF']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{bottom:30}}>
        <Icon.Folder stroke="black" fill="#07AFE6" width={150} height={150} />
        
        </View>
      {/* <TextInput
        style={{
          marginBottom: 10,
          width: '70%',
          // borderWidth: 2,
          // borderColor: '#000',
          borderRadius:15,
          backgroundColor:'#027399',
        }}
        placeholder="Nome"
        placeholderTextColor="#FFf"
        
      /> */}
      <TextInput
        style={{
          marginBottom: 10,
          width: '70%',
          // borderWidth: 2,
          // borderColor: '#000',
          borderRadius: 15,
          backgroundColor: '#027399',
        }}
        placeholder="E-mail"
        placeholderTextColor="#FFf"
        keyboardType="email-address"
      />
      <TextInput
        style={{
          marginBottom: 10,
          width: '70%',
          // borderWidth: 2,
          // borderColor: '#000',
          borderRadius: 15,
          backgroundColor: '#027399',
        }}
        placeholder="Senha"
        placeholderTextColor="#FFf"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={{
          width: 150,
          height: 50,
          backgroundColor: '#027399',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        }}
        onPress={handleClick}>
        <Text style={{fontSize: 16, color: '#FFF'}}>Entrar</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',top:10,}}>
        <Text style={{fontSize:16,color:'#000'}}>Não possui cadastro?</Text>
        <TouchableOpacity onPress={()=>navigation.push('CadastroScreen')}>
          <Text style={{fontSize:16,color:'#000',textDecorationLine:'underline'}}> Criar conta</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
