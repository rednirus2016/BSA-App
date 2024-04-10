import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import colors from '../styles/colors';
import {Login, Search} from '../Screens';
import {Image, View, Text, StyleSheet, Alert} from 'react-native';
import commonStyles from '../styles/commonStyles';
import {moderateScale, moderateScaleVertical} from '../styles/responsiveSize';
import Homestack from './Homestack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddDoctor from '../Screens/Doctors/AddDoctor';
import ViewDoctor from '../Screens/Doctors/ViewDoctor';
import Logout from './Logout';

const Tab = createBottomTabNavigator();

const Homenav = () => {
  return <Homestack />;
};

function TabNav({navigation}) {
  const [users, setUsers] = useState(null);
  const singleuser = async () => {
    const loginusers = await AsyncStorage.getItem('userdata');
    const value = JSON.parse(loginusers);
    setUsers(value|| {});
  };
  singleuser();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          elevation: 2,
          borderTopWidth: 0,
          backgroundColor: colors.whitegreen,
          padding: moderateScaleVertical(5),
          justifyContent: 'center',
        },
        tabBarIcon: ({focused}) => {
          let imgName;
          let txtName;
          let txtcolr;
          let tintcolr;
          if (route.name === navigationStrings.HOME) {
            imgName = focused ? imagePath.HOME1 : imagePath.HOME;
            txtName = focused ? 'Home' : 'Home';
            txtcolr = focused ? colors.btncolor : colors.unselect;
            tintcolr = focused ? colors.btncolor : colors.unselect;
          } else if (route.name === navigationStrings.SEARCH) {
            imgName = focused ? imagePath.SEARCH1 : imagePath.SEARCH;
            txtName = focused ? 'Search' : 'Search';
            txtcolr = focused ? colors.btncolor : colors.unselect;
            tintcolr = focused ? colors.btncolor : colors.unselect;
          } else if (route.name === navigationStrings.LOGIN) {
            imgName = focused ? imagePath.PRODUCT1 : imagePath.PRODUCT;
            txtName = focused ? 'Login' : 'Login';
            txtcolr = focused ? colors.btncolor : colors.unselect;
            tintcolr = focused ? colors.btncolor : colors.unselect;
          } else if (route.name === navigationStrings.AddDoctor) {
            imgName = focused ? imagePath.PRODUCT1 : imagePath.PRODUCT;
            txtName = focused ? 'Add Doctor' : 'Add Doctor';
            txtcolr = focused ? colors.btncolor : colors.unselect;
            tintcolr = focused ? colors.btncolor : colors.unselect;
          } else if (route.name === navigationStrings.ViewDoctor) {
            imgName = focused ? imagePath.PRODUCT1 : imagePath.PRODUCT;
            txtName = focused ? 'View Doctor' : 'View Doctor';
            txtcolr = focused ? colors.btncolor : colors.unselect;
            tintcolr = focused ? colors.btncolor : colors.unselect;
          } else if (route.name === navigationStrings.LOGOUT) {
            imgName = focused ? imagePath.PRODUCT1 : imagePath.PRODUCT;
            txtName = focused ? 'Logout' : 'Logout';
            txtcolr = focused ? colors.btncolor : colors.unselect;
            tintcolr = focused ? colors.btncolor : colors.unselect;
          } else if (route.name === navigationStrings.AddMR) {
            imgName = focused ? imagePath.PRODUCT1 : imagePath.PRODUCT;
            txtName = focused ? 'Add MR' : 'Add MR';
            txtcolr = focused ? colors.btncolor : colors.unselect;
            tintcolr = focused ? colors.btncolor : colors.unselect;
          } else if (route.name === navigationStrings.ViewMR) {
            imgName = focused ? imagePath.PRODUCT1 : imagePath.PRODUCT;
            txtName = focused ? 'View MR' : 'View MR';
            txtcolr = focused ? colors.btncolor : colors.unselect;
            tintcolr = focused ? colors.btncolor : colors.unselect;
          }
          return (
            <>
              <View style={styles.view1}>
                <Image
                  source={imgName}
                  style={{
                    ...commonStyles.Img25,
                    tintColor: tintcolr,
                    paddingTop: 10,
                  }}
                />
              </View>
              <View>
                <Text style={[styles.txt, {color: txtcolr}]}>{txtName}</Text>
              </View>
            </>
          );
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      })}>
        {users?.type === 'admin'?(
          <>
            <Tab.Screen name={navigationStrings.HOME} component={Homenav} />
            <Tab.Screen name={navigationStrings.SEARCH} component={Search} />
            <Tab.Screen
            name={navigationStrings.AddDoctor}
            component={AddDoctor}
          />
          <Tab.Screen
            name={navigationStrings.ViewDoctor}
            component={ViewDoctor}
          />
            <Tab.Screen
              name={navigationStrings.LOGOUT}
              component={Logout}
            />
          </>
        )
           : users?.type === "MR" ? (
           <>
           <Tab.Screen name={navigationStrings.HOME} component={Homenav} />
              <Tab.Screen name={navigationStrings.SEARCH} component={Search} />
              <Tab.Screen
              name={navigationStrings.AddDoctor}
              component={AddDoctor}
            />
            <Tab.Screen
              name={navigationStrings.ViewDoctor}
              component={ViewDoctor}
            />
              <Tab.Screen
                name={navigationStrings.LOGOUT}
                component={Logout}
              />
           </>
           ): users?.type === "Doctor" ? (
          <>
          <Tab.Screen name={navigationStrings.HOME} component={Homenav} />
             <Tab.Screen name={navigationStrings.SEARCH} component={Search} />
             <Tab.Screen
               name={navigationStrings.LOGOUT}
               component={Logout}
             />
          </>

            ) : (
          <>
             <Tab.Screen name={navigationStrings.HOME} component={Homenav} />
            <Tab.Screen name={navigationStrings.SEARCH} component={Search} />
           <Tab.Screen name={navigationStrings.LOGIN} component={Login} />
          </>
            )
          }

    </Tab.Navigator>
  );
}

export default TabNav;
const styles = StyleSheet.create({
  view1: {
    borderRadius: moderateScale(20),
    width: moderateScale(50),
    height: moderateScale(20),
    justifyContent: 'center',
  },
  txt: {fontSize: 9, width: moderateScale(60), textAlign: 'center', margin: 3},
});
