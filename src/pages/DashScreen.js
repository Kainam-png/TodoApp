import react, {useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import style from '../../assets/css/style';
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
const ItemList = ({descricao, dataExecucao, horaExecucao, status, url}) => {
  const [rateStar, setRateStar] = useState(true);
  const setRadio = () => {
    setRateStar(!rateStar);
  };

  return (
    
    <View style={style.ul}>
      <View style={{justifyContent:'center', marginRight:10,}}>
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
  );
};

function DashScreen() {
  return (
    <LinearGradient
      colors={['#027399', '#07AFE6', '#21C8FF']}
      style={{flex: 1}}>
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
        <TouchableOpacity style={style.button} activeOpacity={0.5}>
          <Icon.Plus stroke="black" fill="#fff" width={40} height={40} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default DashScreen;
