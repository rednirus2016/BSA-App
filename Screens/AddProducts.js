import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
  StyleSheet,
  ImageBackground,
  Modal,
  Share,ToastAndroid
} from 'react-native';
import axios from 'axios';
import SelectDropdown from 'react-native-select-dropdown';
import navigationStrings from '../constants/navigationStrings';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import { moderateScale,width,moderateScaleVertical } from '../styles/responsiveSize';
import { useNavigation } from '@react-navigation/native';
import ViewDoctor from './Doctors/ViewDoctor';
import WrapperContainer from '../components/WrapperContainer';


const AddProducts = ({route, navigation}) => {
  const nav = useNavigation();
  const Redniruslink = 'https://bsagroup.redniruscare.com';
  const [doctor, setDoctor] = useState([]);
  const [visual, setVisual] = useState([]);
  const Vetcare = 'https://bivetybiosciences.com/';
  const [showmodal, setshowmodal] = useState(false);
  const [doctors,setDoctors] = useState([]);
  const { productid,data1,data2,doctorid} = route?.params || {};
  const [type,setType] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedVisual, setSelectedVisual] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);


  useEffect(() => {
    getdoctor();
  }, []);
  
  const getdoctor = async () => {
    try {
      const { data } = await axios.get(
        'https://bsagroup.redniruscare.com/api/get/doctor/',
      );
      setDoctor(data.doctor);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      if (error.response && error.response.status === 429) {
        console.log('Too many requests, retrying after delay...');
        setTimeout(getdoctor, 5000); 
      }
    }
  };
  
  const handleModalClose = () => {
    setshowmodal(!showmodal);
    console.log('the id of data1 is 4747',data1?.id);
  };

  const adddoctorevisual = async () => {
    try{
      const {data}  = await axios.get(`https://bsagroup.redniruscare.com/${id}`);
      console.log("this is data from data1id", data1?.visual);

      console.log("data from visiuals",productid);
      setVisual(data?.productid);
    }catch(e){

    }
    if (!selectedDoctor) {
      Alert.alert('Please select a doctor.');
      return;
    }
    navigation.navigate(navigationStrings.ViewDoctor,{
      productid:data1?.id,
        doctorid: selectedDoctor,
    });
    
    const requestData = {
      productid:data1?.id,
      doctorid: selectedDoctor,
    };
  
    try {
      const { data } = await axios.post(
        'https://bsagroup.redniruscare.com/api/store/doctor/visual',
        requestData
      );
      Alert.alert(data.message);
    } catch (error) {
      console.error('Error adding doctor visual:', error);
    }
  };
  
  return (

    <ScrollView style={{backgroundColor: '#443333', flex: 1}}>
      
      <View>
        <View style={localStyles.rowContainer}>
          <View style={{marginVertical: moderateScaleVertical(15)}}>
            <TouchableOpacity onPress={() => setshowmodal(true)}>
              <View style={styles.Visualview}>
                <Text
                  style={{
                    ...commonStyles.fontSize18,
                    color: colors.white,
                    alignSelf: 'center',
                  }}>
                  View Visual Aid 
                </Text>
                <Image
                  source={imagePath.DROPUP}
                  style={{
                    ...commonStyles.Img25,
                    tintColor: colors.white,
                    alignSelf: 'center',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <Modal
          visible={showmodal}
          transparent={true}
          onRequestClose={handleModalClose}>
          <View style={styles.popouterview}>
            <View style={styles.secondpopv}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
      <Image
              source={imagePath.LEFT_ARROW}
              style={styles.arrow}
              tintColor={colors.black}
            />
      </TouchableOpacity>
              {data2 === "vetcare"? 
                  <Image
                    source={{uri: `${Redniruslink}/${data1.visual}`}}
                    style={{
                      height: '100%',
                      width: '100%',
                      resizeMode: 'center',
                    }}
                  />
              : data2 === "vetcare" ?
              (
                <>
                <Text style={{color:"red"}}>Visiual not found</Text>
                <Image
                  source={{uri: `${Vetcare}/${data1?.visual}`}}
                  style={{
                    height: '100%',
                    width: '100%',
                    resizeMode: 'center',
                  }}
                />
                </>
              )
             
                  :<Image
                      source={imagePath.VISUAL}
                      style={{
                        height: '100%',
                        width: '100%',
                        resizeMode: 'center',
                      }}
                    />
              }
              {/* <View>
                {(() => {
                  if (data2 === 'bsagroup') {
                    console.log('this is bsagroup images');
                    return (
                      <Image
                        source={{uri: `${Redniruslink}/${data1.visual}`}}
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'center',
                        }}
                      />
                    );
                  } else if (data2 === 'vetcare') {
                    console.log('this is vetcare images');
                    return (
                      <>
                      <Text>Visiual not found</Text>
                      <Image
                        source={{uri: `${Vetcare}/${data1?.visual}`}}
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'center',
                        }}
                      />
                      </>
                    );
                  } else {
                    return (
                      <Image
                        source={imagePath.VISUAL}
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'center',
                        }}
                      />
                    );
                  }
                })()}
              </View> */}
            </View>
          </View>
        </Modal>
        </View>
        <View style={localStyles.doctoption}>
          <SelectDropdown
            style={{color: 'red'}}
            data={doctor}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setSelectedDoctor(selectedItem.id);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem.name;
            }}
            rowTextForSelection={(item, index) => {
              return item.name;
            }}
          />
          <TouchableOpacity onPress={adddoctorevisual} style={{ backgroundColor: 'red',paddingLeft:50,marginLeft:10,textAlign:"center",paddingRight:50}}>
            <Text
              style={{
                color: '#fff',
                borderRadius: 8,
                alignItems:"center",
                marginTop:10,
              }}>
              Add
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );

};
const localStyles = StyleSheet.create({
  title: {},
  rowContainer: {
   flex:1,
  },
  dropdownBtnStyle: {},
  dropdownBtnTxtStyle: {},
  addButton: {},
  doctorsList: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  visualsList: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  doctoption:{
    flexDirection:'row',
    alignSelf:"center",
    width:"80%",
    marginTop:250,
  }
  
});

export default AddProducts;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  Productss: {
    backgroundColor: '#3BEF1E',
    opacity: 0.7,
    padding: 30,
    borderRadius: 45,
    width: '90%',
    alignSelf: 'center',
  },
  Products1: {
    color: '#ffffff',
    alignSelf: 'center',
    fontWeight: '800',
    fontSize: 22,
  },
  doct: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 7,
    marginLeft: 20,
  },
  popouterview: {
    justifyContent: 'center',
    height: '100%',
    backgroundColor: colors.white,
  },
  secondpopv: {
    backgroundColor: colors.white,
    height: '80%',
  },
  Visualview:{
    backgroundColor:"green",
    alignSelf:"center",
    padding:20,
    borderRadius:20,
    width:"80%",

  },
  arrow:{
    margin:10,
    height:20,
    width:25,
  },
});
