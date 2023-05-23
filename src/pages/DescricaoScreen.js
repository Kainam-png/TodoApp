import React, {useState,useEffect} from 'react';
import {View, Text, TouchableOpacity,TextInput,Modal,Button,StyleSheet} from 'react-native';
import {useNavigation,useIsFocused } from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import LinearGradient from 'react-native-linear-gradient';


const DescricaoScreen = () => {
  const navigation = useNavigation();
  const handleClick = () => {
    //navegacao
    navigation.navigate('Dash');
  };
  const [modalVisible, setModalVisible] = useState(false);
  const isFocused = useIsFocused();

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    setModalVisible(false); // Redefine o estado quando a tela for focada novamente
  }, [isFocused]);

  return (
    <LinearGradient
      colors={['#027399', '#07AFE6', '#21C8FF']}
      style={{flex: 1}}>
        <Modal visible={modalVisible} animationType="fade" transparent={true} onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Deseja criar outra tarefa?</Text>
            <View style={styles.buttonContainer}>
              <Button title="Sim" onPress={() => navigation.push('Dash')} style={styles.button} />
              <Button title="Não" onPress={handleCloseModal} style={styles.button} />
            </View>
          </View>
        </View>
      </Modal>
      
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
      <View style={{flexDirection:'row',gap:20}}>
      <TouchableOpacity
        style={{
          width: 120,
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
      <TouchableOpacity
        style={{
          width: 120,
          height: 50,
          backgroundColor: '#027399',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          top:50,
        }}
        onPress={handleOpenModal}>
        <Text style={{fontSize: 16, color: '#FFF'}}>Excluir</Text>
      </TouchableOpacity>
      </View>
        </View>
      
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  
 
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  
});
export default DescricaoScreen;
