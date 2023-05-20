import react, {useState,useEffect} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Modal,
  StyleSheet,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from '../../assets/css/style';
import {useNavigation,useIsFocused } from '@react-navigation/native';
import * as Icon from 'react-native-feather';

const data = [
  {
    id: 1,
    descricao: 'Pescar',
    dataExecucao: '16/04/2023',
    horaExecucao: '16:20',
    status: '',
  },
  {
    id: 2,
    descricao: 'Estudar',
    dataExecucao: '11/12/2023',
    horaExecucao: '13:00',
    status: '',
  },
];

const ItemList = ({
  descricao,
  dataExecucao,
  horaExecucao,
  onPress,
  status,
  url,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.push('DescricaoScreen')}>
      <View style={style.ul}>
        <View style={{justifyContent: 'center', marginRight: 10}}>
          <Icon.Folder stroke="black" fill="#07AFE6" width={40} height={40} />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={style.li}>{descricao}</Text>
        </View>
        <View style={style.ulHr}>
          <Text style={style.liHr}>{dataExecucao}</Text>
          <Text style={style.liHr}>{horaExecucao}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

function DashScreen({navigation}) {
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
              <Button title="Sim" onPress={() => navigation.push('CreateTask')} style={styles.button} />
              <Button title="Não" onPress={handleCloseModal} style={styles.button} />
            </View>
          </View>
        </View>
      </Modal>
      <View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ItemList
              descricao={item.descricao}
              // url={item.url}

              dataExecucao={item.dataExecucao}
              horaExecucao={item.horaExecucao}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={style.container}>
        <TouchableOpacity
          style={style.button}
          activeOpacity={0.5}
          onPress={handleOpenModal}
          >
          <Icon.Plus stroke="black" fill="#fff" width={40} height={40} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
//
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  button: {
    width: 100,
  },
});

export default DashScreen;
