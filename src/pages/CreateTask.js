import React, {useState} from 'react';
import {Button, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { addTarefa } from '../db';




const CreateTaks = () => {
  const [tarefa, setTarefa] = useState({descricao: '', data: '', hora: '', status: false});

  const handleChange = (text, nome) => {
    setTarefa({...tarefa, [nome]: text})
  }

  const handleAddTarefa = () => {
    console.log(tarefa);
    const resultado = addTarefa(tarefa);
    if(resultado) {
      navigation.push('Dash');
    }
    
  }
  const navigation = useNavigation();
  const handleClick = () => {
    //navegacao
    navigation.goBack();
  };
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  return (
    <LinearGradient
    start={{x:0,y:1}}
    end={{x:1,y:0}}
      locations={[.5,0.7]}
    colors={['#6F9FE6','#7A93E6']}
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
        onChangeText={(text) => handleChange(text,'descricao')}
        value={tarefa.descricao}
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
        placeholderTextColor='#000'
        placeholder="Data"
        onChangeText={(text) => handleChange(text,'data')}
        value={tarefa.data}
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
        placeholderTextColor='#000'
        placeholder="Hora"
        onChangeText={(text) => handleChange(text,'hora')}
        value={tarefa.hora}
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
        onPress={() => handleAddTarefa()}>
        <Text style={{fontSize: 16, color: '#FFF'}}>Concluir</Text>
      </TouchableOpacity>
      
    </LinearGradient>
  );
};

export default CreateTaks;
