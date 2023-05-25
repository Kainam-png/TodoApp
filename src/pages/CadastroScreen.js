import React, {useState} from 'react';
import {Button, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import * as Icon from 'react-native-feather';





const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const navigation = useNavigation();
  const handleClick = () => {
    //navegacao
    navigation.navigate('Dash', {nome: nome});
  };
  return (
    <LinearGradient
    start={{x:0,y:1}}
    end={{x:1,y:0}}
      locations={[.5,0.7]}
    colors={['#6F9FE6','#7A93E6']}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{bottom:30}}>
        <Icon.Folder stroke="black" fill="#07AFE6" width={150} height={150} />
        
        </View>
      <TextInput
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
          width: 85,
          height: 45,
          backgroundColor: '#027399',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        }}
        onPress={()=>navigation.goBack()}>
        <Text style={{fontSize: 16, color: '#FFF'}}>Cadastrar</Text>
      </TouchableOpacity>
      <View style={{flexDirection:'row',top:10,}}>
      </View>
    </LinearGradient>
  );
};

export default CadastroScreen;
