import React from 'react';
import {View, Text, TouchableOpacity,TextInput,} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import LinearGradient from 'react-native-linear-gradient';

const DescricaoScreen = () => {
  const navigation = useNavigation();
  const handleClick = () => {
    //navegacao
    navigation.navigate('Dash');
  };

  return (
    <LinearGradient
      colors={['#027399', '#07AFE6', '#21C8FF']}
      style={{flex: 1}}>
      
      <View style={{alignItems: 'center'}}>
        <View style={{bottom: 30, top: 30}}>
          <Icon.Folder stroke="black" fill="#07AFE6" width={150} height={150} />
        </View>
        <View style={{width: '70%',top:40,}}>
        <TextInput
        style={{
          marginBottom: 10,
          padding:10,
          
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
          // width: '70%',
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
          // width: '70%',
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
      </View>
      <TouchableOpacity
        style={{
          width: 150,
          height: 50,
          backgroundColor: '#027399',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          top:50,
        }}
        onPress={handleClick}>
        <Text style={{fontSize: 16, color: '#FFF'}}>Salvar</Text>
      </TouchableOpacity>
        </View>
      
    </LinearGradient>
  );
};

export default DescricaoScreen;
