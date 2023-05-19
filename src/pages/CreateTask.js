import React, {useState} from 'react';
import {Button, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import * as Icon from 'react-native-feather';
const CreateTaks = () => {
  const [nome, setNome] = useState('');
  const navigation = useNavigation();
  const handleClick = () => {
    //navegacao
    navigation.goBack();
  };
  return (
    <LinearGradient
      colors={['#027399', '#07AFE6', '#21C8FF']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{bottom: 40,}}>
        <Text style={{fontSize: 35,color:'#000'}}>
          
          Criar Tarefa
        </Text>
      </View>
      <TextInput
        style={{
          marginBottom: 10,
          padding:10,
          width: '70%',
          // borderWidth: 2,
          // borderColor: '#000',
          borderRadius: 15,
          backgroundColor: '#027399',
        }}
        placeholder="Titulo da tarefa"
        placeholderTextColor="#FFf"
      />
      <TextInput
        style={{
          marginBottom: 10,
          width: '70%',
          height:100,
          padding:10,
          // borderWidth: 2,
          // borderColor: '#000',
          borderRadius: 15,
          backgroundColor: '#027399',
        }}
        numberOfLines={4}
        placeholder="Descrição da tarefa"
        placeholderTextColor="#FFf"
        keyboardType="email-address"
      />
      <TextInput
        style={{
          marginBottom: 10,
          width: '70%',
          padding:10,
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
        <Text style={{fontSize: 16, color: '#FFF'}}>Concluir</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CreateTaks;
