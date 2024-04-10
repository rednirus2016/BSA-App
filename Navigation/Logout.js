import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationStrings from '../constants/navigationStrings';
import { useNavigation, CommonActions } from '@react-navigation/native';

const Logout = () => {
  const navigation = useNavigation();
  
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userdata');
    Alert.alert(
      'Logout successfully!',
      undefined,
      [
        {
          text: 'OK',
          onPress: () => {
            const resetAction = CommonActions.reset({
              index: 0,
              routes: [{ name: navigationStrings.LOGIN }],
            });
            navigation.dispatch(resetAction);
          },
        },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    handleLogout();
  }, []);
  
  return null; 
};

export default Logout;
