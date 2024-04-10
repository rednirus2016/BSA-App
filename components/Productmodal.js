import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import commonStyles from '../styles/commonStyles';
import ppt from '../assets/images/ppt.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

function Productmodal(props) {
  const [users, setUsers] = useState({});
  const navigation = useNavigation();

  const singleuser = async () => {
    const loginusers = await AsyncStorage.getItem('userdata');
    const value = JSON.parse(loginusers);
    setUsers(value);
  };

  singleuser();
  useEffect(() => {}, []);

  const storeindata = async name => {
    if (users) {
      const datas = {
        productname: name,
        usernameid: users.id,
      };
      const {data} = await axios.post(
        'https://bsagroup.redniruscare.com/api/userdata/ppt',
        datas,
      );
      Alert.alert('This product added succesfully in PPT');
    } else {
      Alert.alert('You are not authenticate! Please Login');
    }
  };

  return (
    <>
      <View
        style={[
          styles.view1,
          {backgroundColor: props.Propcolor, position: 'relative'},
        ]}>
        {props.name === 'vetcare' ? (
          <FastImage
            source={{uri: `https://bivetybiosciences.com/${props.PImage}`}}
            style={styles.View2}
            resizeMode={FastImage.resizeMode.contain}
            priority={FastImage.priority.high}
            preload={true}
          />
        ) : (
          <FastImage
            source={{uri: `https://bsagroup.redniruscare.com/${props.PImage}`}}
            style={styles.View2}
            resizeMode={FastImage.resizeMode.contain}
            priority={FastImage.priority.high}
            preload={true}
          />
        )}
        <View style={{marginVertical: moderateScaleVertical(5)}}>
          <Text style={[styles.txt1, {fontFamily: 'Lato'}]}>{props.Pname}</Text>
        </View>
        <View style={styles.View3}>
          <FastImage
            source={imagePath.COMPOSITION}
            style={{...commonStyles.Img20}}
            resizeMode={FastImage.resizeMode.contain}
            priority={FastImage.priority.high}
            preload={true}
          />
          <Text
            numberOfLines={1}
            style={[
              styles.txt2,
              {left: moderateScaleVertical(10), width: '70%'},
            ]}>
            {props.Cname}
          </Text>
        </View>
      </View>
    </>
  );
}
export default Productmodal;
const styles = StyleSheet.create({
  view1: {
    ...commonStyles.shadowStyle2,
    padding: moderateScaleVertical(10),
  },
  View2: {
    height: moderateScale(120),
    width: '100%',
    backgroundColor: 'transparent',
  },
  View3: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: moderateScaleVertical(5),
    alignItems: 'center',
  },
  txt1: {
    ...commonStyles.fontSize18,
    color: colors.btncolor,
    fontWeight: '700',
  },
  txt2: {
    ...commonStyles.fontSize14,
    color: colors.black,
  },
  abs: {
    position: 'absolute',
    right: -90,
    bottom: -20,
  },
});
