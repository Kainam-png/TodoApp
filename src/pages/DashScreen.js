import react, {useState, useEffect} from 'react';
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
import {useNavigation, useIsFocused} from '@react-navigation/native';
import * as Icon from 'react-native-feather';
import SQLite from 'react-native-sqlite-storage';
import { criarTabela, db, listarTarefas } from "../db";
// const data = [
//   {
//     id: 1,
//     descricao: 'Pescar',
//     dataExecucao: '16/04/2023',
//     horaExecucao: '16:20',
//     status: '',
//   },
//   {
//     id: 2,
//     descricao: 'Estudar',
//     dataExecucao: '11/12/2023',
//     horaExecucao: '13:00',
//     status: '',
//   },
// ];

const ItemList = ({
  descricao,
  data,
  hora,
  onPress,
  status,
  url,
}) => {
  const navigation = useNavigation();
  const [concluida, setConcluida] = useState(false);

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
          <TouchableOpacity onPress={() => setConcluida(!concluida)}>
            {concluida ? (
              <Icon.CheckCircle stroke="black" width={24} height={24} />
            ) : (
              <Icon.Circle stroke="black" width={24} height={24} />
            )}
          </TouchableOpacity>
          <Text style={style.liHr}>{data}</Text>
          <Text style={style.liHr}>{hora}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

function DashScreen({navigation}) {
  //useEffect(()=>)
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

  const [tarefasDados, setTarefasDados] = useState([]);
  useEffect(() => {
      criarTabela();
      //listar todas as tarefas do banco
      db.transaction(async (tx) => {
          await tx.executeSql('SELECT * FROM tasks', 
              [], 
              (txt, result) => {
                  let tarefasArray = [];
                  let len = result.rows.length;
                  for (let i = 0; i < len; i++) {
                      let row = result.rows.item(i); 
                      tarefasArray.push(row);        
                  }
                  setTarefasDados(tarefasArray);
              },
              (error) => {console.log(error)}
          );
        });
  
  }, [])


  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      locations={[0.5, 0.7]}
      colors={['#6F9FE6', '#7A93E6']}
      style={{flex: 1}}>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Deseja criar outra tarefa?</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Sim"
                onPress={() => navigation.push('CreateTask')}
                style={styles.button}
              />
              <Button
                title="Não"
                onPress={handleCloseModal}
                style={styles.button}
              />
            </View>
          </View>
        </View>
      </Modal>
      <View>
        <Text style={{textAlign:'center'}}>
          Lista de tarefa
        </Text>
      </View>
      <View>
        <FlatList
          data={tarefasDados}
          renderItem={({item}) => (
            <ItemList
            descricao={item.descricao} data={item.data} hora={item.hora}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={style.container}>
        <TouchableOpacity
          style={style.button}
          activeOpacity={0.5}
          onPress={handleOpenModal}>
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
