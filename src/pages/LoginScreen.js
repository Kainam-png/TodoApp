import React, {useState} from 'react';
import {Button, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [nome, setNome] = useState('');
  const navigation = useNavigation();
  const handleClick = () => {
     //navegacao
     navigation.navigate('Dash', {nome: nome});
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholder="nome"
        
      />
      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholder="e-mail"
        keyboardType="email-address"
      />
      <TextInput
        style={{
          marginBottom: 10,
          width: '90%',
          borderWidth: 1,
          borderColor: '#000',
        }}
        placeholder="senha"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: '#900',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleClick}>
        <Text style={{fontSize: 16, color: '#FFF'}}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
