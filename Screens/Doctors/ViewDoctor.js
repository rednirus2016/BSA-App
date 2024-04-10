import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  Alert,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import axios from 'axios';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';
import AddProducts from './../AddProducts';
const {width} = Dimensions.get('window');
import {useRoute} from '@react-navigation/native';
import commonStyles from '../../styles/commonStyles';
import colors from '../../styles/colors';
const ViewDoctor = ({navigation, props}) => {
  const Redniruslink = 'https://bsagroup.redniruscare.com';
  const Vetcare = 'https://bivetybiosciences.com/';
  const route = useRoute();
  const {productid, doctorid} = route?.params || {};
  const [users, setUsers] = useState({});
  const [visual, setVisual] = useState([]);
  const [statuss, setStatus] = useState(0);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const singleuser = async () => {
    const loginusers = await AsyncStorage.getItem('userdata');
    const value = JSON.parse(loginusers);
    setUsers(value || {});
  };
  singleuser();
  const [doc, setDoc] = useState([]);
  const [deleteItem, setDeleteItem] = useState([]);
  const [timerDuration, setTimerDuration] = useState(60); 
  const [approvedDoctorId, setApprovedDoctorId] = useState(null);
  const fetchData = async () => {
    try {
      const {data} = await axios.get(
        'https://www.bsagroup.redniruscare.com/api/get/doctor/',
      );
      console.log('data is this', data);
      setDoc(data.doctor);
    } catch (err) {
      console.log('doctor error', err);
    }
  };
  
  useEffect(() => {
    fetchData();
  },[]);
  
 

  const keyExtractor = item => `${item.id}`;
  const deleteData = async id => {
    const result = Alert.alert('are you really want to delete Doctor data ?');
    await axios.delete(
      `https://www.bsagroup.redniruscare.com/api/get/mr/${id}/`,
    );
    fetchData();
  };

  const Divisonfunction = id => {
    navigation.navigate(navigationStrings.VISUAL, {id: id});
  };

  const setActiveStatus = async (id, newStatus) => {
    try {
      const updatedDoc = doc.map(docItem =>
        docItem.id === id ? {...docItem, loading: true} : docItem,
      );
      setDoc(updatedDoc);

      const datas = {
        status: newStatus,
        id: id,
      };
      const response = await axios.post(
        'https://bsagroup.redniruscare.com/api/admin/doctor/update/status/',
        datas,
      );

      if (response.data.success) {
        const updatedDocSuccess = doc.map(docItem =>
          docItem.id === id
            ? {...docItem, status: newStatus, loading: false}
            : docItem,
        );
        setDoc(updatedDocSuccess);
      } else {
        const updatedDocError = doc.map(docItem =>
          docItem.id === id ? {...docItem, loading: false} : docItem,
        );
        setDoc(updatedDocError);

        console.log('Error: MR status update failed');
      }
    } catch (e) {
      console.log('This is an error', e);
    }
  };

  useEffect(() => {
    setActiveStatus();
  },[]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
      <Image
              source={imagePath.LEFT_ARROW}
              style={styles.arrow}
              tintColor={colors.black}
            />
      </TouchableOpacity>

      <View style={{padding: 10}}>
        <Text
          style={{
            backgroundColor: 'green',
            textAlign: 'center',
            color: '#fff',
            fontSize: 14,
            fontWeight: 'bold',
            padding: 10,
          }}>
          All Doctor
        </Text>
      </View>
      <FlatList
        data={doc}
        keyExtractor={keyExtractor}
        renderItem={({item, index}) => {
          return (
            <View style={styles.maincontainer}>
              <View style={styles.container}>
                <View
                  style={{
                    flex: 1,
                    width: '50%',
                    backgroundColor: '#E3F9EF',
                    padding: 10,
                  }}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(navigationStrings.ProductData, {
                          doctorid})}>
                      <Text
                        style={{color: '#000000', textTransform: 'uppercase'}}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{color: '#000000', textTransform: 'capitalize'}}
                      onPress={() => Divisonfunction(item.id)}>
                      View Visual
                    </Text>
                  </View>

                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}></View>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      width: '100%',
                      height: 1,
                      flexDirection: 'column',
                      margin: 15,
                      alignSelf: 'center',
                      borderColor: '#000000',
                    }}></View>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                    }}>
                    <Text style={{color: 'red', margin: 0}}>Delete Doctor</Text>
    <TouchableOpacity  onPress={() => deleteData(item.id)}>
      <Image
              source={imagePath.Delete}
              style={{height:20,width:20}}
            />
      </TouchableOpacity>
                  </View>
                  {users.type === "admin" ?
                   <View
                   style={{
                     flexDirection: 'row',
                     alignSelf: 'center',
                     marginVertical: 20,
                   }}>
                   <TouchableOpacity
                     onPress={() => {
                       const newStatus = item.status === 0 ? 1 : 0;
                       const updatedDoc = doc.map(docItem =>
                         docItem.id === item.id
                           ? {...docItem, status: newStatus}
                           : docItem,
                       );
                       setDoc(updatedDoc);

                       setActiveStatus(item.id, newStatus);
                     }}
                     style={[
                       styles.activebtn,
                       item.status === 0
                         ? styles.activeButton
                         : styles.inactiveButton,
                       item.loading ? styles.loadingButton : null,
                     ]}
                     disabled={item.loading}>
                     <Text
                       style={{
                         textAlign: 'center',
                         color: '#fff',
                         fontWeight: 'bold',
                         fontSize: 18,
                       }}>
                       {item.status === 0 ? 'Approve' : 'Disapprove'}
                     </Text>
                   </TouchableOpacity>
                 </View>
                   : null}
                 
                </View>
              </View>
            </View>
          );
        }}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
export default ViewDoctor;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    marginVertical: 10,
  },
  arrow:{
    margin:10,
    height:20,
    width:25,
  },
  container: {
    flex: 1,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    height: width / 1.7,
    width: '100%',
    borderRadius: 12,
    shadowColor: '#000',
  },
  texthandle: {
    fontSize: 14,
    width: '48%',
    color: '#000000',
  },
  activebtn: {
    padding: 10,
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: 10,
    width: '80%',
    backgroundColor: '#4DD637',
  },
  activeButton: {
    backgroundColor: '#4DD637',
  },
  inactiveButton: {
    backgroundColor: 'red',
  },
});
