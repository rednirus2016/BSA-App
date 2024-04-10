import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {Login, Signup, Splash } from '../Screens';
import TabNav from './TabNav';
import Doctor from './../Screens/Doctors/Doctor';
import AddDoctor from '../Screens/Doctors/AddDoctor';
import DoctorDetails from '../Screens/Doctors/DoctorDetails';

const Stack = createStackNavigator();
const Tabnav = () => {
    return (
        <TabNav />
    );
}
function Loginstack() {

    return (
        <>
            <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{ headerShown: false }} 
                >
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name={navigationStrings.SPLASH} component={Splash} />
                <Stack.Screen name={navigationStrings.HOME} component={Tabnav} />
                <Stack.Screen name={navigationStrings.DOCTOR} component={Doctor} />
                <Stack.Screen name={navigationStrings.DoctorDetails} component={DoctorDetails}/>
                <Stack.Screen name={navigationStrings.AddDoctor} component={AddDoctor}/>
                <Stack.Screen name={navigationStrings.SIGNUP} component={Signup}/>
               
            </Stack.Navigator>
        </>
    )
}
export default Loginstack;


