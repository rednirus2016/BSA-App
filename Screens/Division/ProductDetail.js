import {
  View,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  Modal,
  Button,
  ToastAndroid,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import WrapperContainer from '../../components/WrapperContainer';
import ImageViewer from 'react-native-image-zoom-viewer';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../../styles/responsiveSize';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import navigationStrings from '../../constants/navigationStrings';
import Share from 'react-native-share';

import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SelectDropdown from 'react-native-select-dropdown';
import axios from 'axios';

// import Icon from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';

const ProductDetail = ({route}) => {
  const countries = ['MR', 'Doctor'];
  const [type, setType] = useState('');
  const Redniruslink = 'https://bsagroup.redniruscare.com/';
  const Vetcare = 'https://bivetybiosciences.com/';
  const [showmodal, setshowmodal] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [users, setUsers] = useState({});
  const {data1, data2} = route?.params || {};
  const navigation = useNavigation();

  const visual = `https://bsagroup.redniruscare.com/${data1?.visual}`;
  const getdoctor = async () => {
    const {data} = await axios.get(
      'https://bsagroup.redniruscare.com/api/get/doctor/',
    );
    setDoctors(data.doctor);
  };

  const adddoctorevisual = async () => {
    const datas = {
      productid: data1.id,
      doctorid: type,
    };
    try {
      const {data} = await axios.post(
        'https://bsagroup.redniruscare.com/api/store/doctor/visual',
        datas,
      );

      Alert.alert(data.message);
    } catch (error) {
      console.log('this is main errror', error);
    }
  };
  const singleuser = async () => {
    const loginusers = await AsyncStorage.getItem('userdata');
    const value = JSON.parse(loginusers);
    setUsers(value);
  };
  useEffect(() => {
    getdoctor();
    singleuser();
  }, []);
  function handleGoBack() {
    navigation.goBack();
  }
  const myCustomShare = async () => {
    const shareOptions = {
      message:
        'Product Name: ' +
        data1.name +
        '\n' +
        'Composition: ' +
        data1.composition +
        '\n' +
        'Image: ' +
        (data2 === 'bsagroup' ? Redniruslink : Vetcare) +
        data1.image +
        '\n' +
        'Visual: ' +
        (data2 === 'bsagroup' ? Redniruslink : Vetcare) +
        data1.visual,
    };
    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  };
  const handleModalClose = () => {
    setshowmodal(!showmodal);
  };
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritePress = async () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      await setDataToAsyncStorage();
      ToastAndroid.show('Added to favourite', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Removed from favourite', ToastAndroid.SHORT);
    }
  };
  const [DATA, setDATA] = useState(data1);

  const setDataToAsyncStorage = async () => {
    try {
      await AsyncStorage.setItem('data', JSON.stringify(DATA));
    } catch (error) {
      console.log('AsyncStorage set data error in list component');
    }
  };
  const regex = /(<([^>]+)>)/gi;

  return (
    <WrapperContainer>
      <ScrollView showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}>
                           {/* <TouchableOpacity onPress={()=> navigation.goBack()}>
      <Image
              source={imagePath.LEFT_ARROW}
              style={styles.arrow}
              tintColor={colors.black}
            />
      </TouchableOpacity> */}
        {data2 === 'vetcare' ? (
          <FastImage
            source={{uri: `${Vetcare}/${data1.image}`}}
            style={styles.Imgback}
            resizeMode={FastImage.resizeMode.contain}
            priority={FastImage.priority.high}
            preload={true}>
            <View style={styles.view1}>
              <View style={[styles.inner1, {justifyContent: 'flex-start'}]}>
                <TouchableOpacity onPress={() => handleGoBack()}>
                  <FastImage
                    source={imagePath.LEFT_ARROW}
                    style={styles.upperimg}
                    resizeMode={FastImage.resizeMode.contain}
                    priority={FastImage.priority.high}
                    preload={true}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.view2}>
              <View style={[styles.inner1, {justifyContent: 'flex-end'}]}>
                <TouchableOpacity onPress={handleFavoritePress}>
                  {isFavorite ? (
                    <FastImage
                      source={imagePath.Favorite1}
                      style={styles.upperimg}
                      resizeMode={FastImage.resizeMode.contain}
                      priority={FastImage.priority.high}
                      preload={true}
                    />
                  ) : (
                    <FastImage
                      source={imagePath.Favorite}
                      style={styles.upperimg}
                      resizeMode={FastImage.resizeMode.contain}
                      priority={FastImage.priority.high}
                      preload={true}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <View style={[styles.inner1, {justifyContent: 'flex-end'}]}>
                <TouchableOpacity onPress={myCustomShare}>
                  <FastImage
                    source={imagePath.SHARE}
                    style={styles.upperimg}
                    resizeMode={FastImage.resizeMode.contain}
                    priority={FastImage.priority.high}
                    preload={true}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </FastImage>
        ) : (
          <FastImage
            source={{uri: `${Redniruslink}/${data1?.image}`}}
            style={styles.Imgback}
            resizeMode={FastImage.resizeMode.contain}
            priority={FastImage.priority.high}
            preload={true}>
            <View style={styles.view1}>
              <View style={[styles.leftarrow, {justifyContent: 'flex-start'}]}>
                <TouchableOpacity onPress={() => handleGoBack()}>
                  <FastImage
                    source={imagePath.LEFT_ARROW}
                    style={styles.upperimg}
                    resizeMode={FastImage.resizeMode.contain}
                    priority={FastImage.priority.high}
                    preload={true}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.view2}>
              <View style={[styles.inner1, {justifyContent: 'flex-end'}]}>
                <TouchableOpacity onPress={handleFavoritePress}>
                  {isFavorite ? (
                    <FastImage
                      source={imagePath.Favorite1}
                      style={styles.upperimg}
                      resizeMode={FastImage.resizeMode.contain}
                      priority={FastImage.priority.high}
                      preload={true}
                    />
                  ) : (
                    <FastImage
                      source={imagePath.Favorite}
                      style={styles.upperimg}
                      resizeMode={FastImage.resizeMode.contain}
                      priority={FastImage.priority.high}
                      preload={true}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <View style={[styles.inner1, {justifyContent: 'flex-end'}]}>
                <TouchableOpacity onPress={myCustomShare}>
                  <FastImage
                    source={imagePath.SHARE}
                    style={styles.upperimg}
                    resizeMode={FastImage.resizeMode.contain}
                    priority={FastImage.priority.high}
                    preload={true}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </FastImage>
        )}

        <View style={styles.outer1}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: moderateScaleVertical(10),
            }}>
            <Text style={styles.Inputtxt2}>{data1.name}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: moderateScaleVertical(10),
            }}>
            <FastImage
              source={imagePath.PACK}
              style={{...commonStyles.Img25}}
              resizeMode={FastImage.resizeMode.contain}
              priority={FastImage.priority.high}
              preload={true}
            />
            <Text style={styles.Inputtxt}>Packing</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {data1.packing ? (
              <Text style={{...commonStyles.fontSize17, alignSelf: 'center'}}>
                {data1.packing}
              </Text>
            ) : (
              <Text style={{...commonStyles.fontSize17, alignSelf: 'center'}}>
                Not available
              </Text>
            )}
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: moderateScaleVertical(10),
            }}>
            <FastImage
              source={imagePath.COMPOSITION}
              style={{...commonStyles.Img25}}
              resizeMode={FastImage.resizeMode.contain}
              priority={FastImage.priority.high}
              preload={true}
            />
            <Text style={styles.Inputtxt}>Composition</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {data1.composition ? (
              <Text style={{...commonStyles.fontSize17, alignSelf: 'center'}}>
                {data1.composition}
              </Text>
            ) : (
              <Text style={{...commonStyles.fontSize17, alignSelf: 'center'}}>
                Not available
              </Text>
            )}
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: moderateScaleVertical(10),
              }}>
              <FastImage
                source={imagePath.COMPOSITION}
                style={{...commonStyles.Img25}}
                resizeMode={FastImage.resizeMode.contain}
                priority={FastImage.priority.high}
                preload={true}
              />
              <Text style={styles.Inputtxt}>Category</Text>
            </View>
            <View>
              <Text style={{fontSize: 13, color: '#000'}}>
                {data1.description?.replace(regex, ' ')}
              </Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {users?.type === 'admin' ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(navigationStrings.ADDPRODUCTS, {
                  prodcutid: type,
                  data1: data1,
                  data2: data2,
                })
              }>
              <Text style={styles.plusicon}>
              <Image
              source={imagePath.PlusIcon}
              style={{height:40,width:40}}
            />
              </Text>
             
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.navigate(navigationStrings.LOGIN)}>
              <Text style={styles.plusicon}>
              <Image
              source={imagePath.RightArrow}
              style={{height:40,width:40}}
            />
              </Text>
            </TouchableOpacity>
          )}

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
         
                <FastImage
                  source={imagePath.DROPUP}
                  style={{
                    ...commonStyles.Img25,
                    tintColor: colors.white,
                    alignSelf: 'center',
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                  priority={FastImage.priority.high}
                  preload={true}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          visible={showmodal}
          transparent={true}
          onRequestClose={handleModalClose}>
          <View style={styles.popouterview}>
            <View style={styles.secondpopv}>
              <View>
                {(() => {
                  if (data2 === 'bsagroup') {
                    return (
                      <>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Image
              source={imagePath.LEFT_ARROW}
              style={styles.arrow}
              tintColor={colors.black}
            />
      </TouchableOpacity>
      <ImageViewer
      imageUrls={[
        {
          url: `https://bsagroup.redniruscare.com/${data1.visual}`,
        }
      ]}
      enableSwipeDown={true}
      renderIndicator={() => null}
      onSwipeDown={handleModalClose}
      style={{width:"100%", height: "100%"}}
    />
                      {/* <FastImage
                        source={{uri: `${Redniruslink}${data1.visual}`}}
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'center',
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                        priority={FastImage.priority.high}
                        preload={true}
                      /> */}
                      </>
                    );
                  }
                   else if (data2 === 'vetcare') {
                    return (
                      <FastImage
                        source={{uri: `${Vetcare}${data1.visual}`}}
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'center',
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                        priority={FastImage.priority.high}
                        preload={true}
                      />
                    );
                  }
                   else {
                    return (
                      <>
                      <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Image
              source={imagePath.LEFT_ARROW}
              style={styles.arrow}
              tintColor={colors.black}
            />
      </TouchableOpacity>
                        <FastImage
                          source={imagePath.VISUAL}
                          style={{
                            height: '100%',
                            width: '100%',
                            resizeMode: 'center',
                          }}
                          resizeMode={FastImage.resizeMode.contain}
                          priority={FastImage.priority.high}
                          preload={true}
                        />
                      </>
                    );
                  }
                })()}
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </WrapperContainer>
  );
};
export default ProductDetail;
const styles = StyleSheet.create({
  Imgback: {
    height: moderateScale(300),
    width: width,
    resizeMode: 'center',
    padding: moderateScaleVertical(10),
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  dropdown1BtnStyle: {
    width: '70%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  inner1: {
    backgroundColor: 'rgba(232,234,273,0.66)',
    borderRadius: moderateScaleVertical(50),
    width: moderateScale(40),
    padding: moderateScaleVertical(10),
  },
  leftarrow:{ borderRadius: moderateScaleVertical(50),
    width: moderateScale(40),
    padding: moderateScaleVertical(10),
    backgroundColor:"black",
  },
  upperimg: {
    alignSelf: 'center',
    ...commonStyles.Img20,
    tintColor: colors.black,
  },
  outer1: {
    backgroundColor: colors.white,
    padding: moderateScaleVertical(20),
    width: width,
  },
  Inputtxt2: {
    ...commonStyles.fontBold21,
    fontWeight: 'bold',
    color: colors.btncolor,
  },
  Inputtxt: {
    ...commonStyles.fontBold20,
    fontWeight: 'bold',
    color: colors.btncolor,
    alignSelf: 'center',
    marginLeft: moderateScaleVertical(5),
  },
  Visualview: {
    backgroundColor: colors.btncolor,
    left: moderateScaleVertical(40),
    borderRadius: 15,
    height: moderateScale(50),
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '80%',
    algnSelf: 'center',
  },

  //model
  popouterview: {
    justifyContent: 'center',
    height: '100%',
    backgroundColor: colors.white,
  },
  secondpopv: {
    height: '80%',
  },
  thrdpopv: {
    backgroundColor: 'transparent',
    borderRadius: 17,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 25,
  },
  poptxt: {
    fontSize: 20,
    color: colors.black,
    alignSelf: 'center',
  },
  plusicon: {
    marginLeft: 25,
    marginTop: 20,
  },
  arrow:{
    margin:10,
    height:20,
    width:25,
  },
});
