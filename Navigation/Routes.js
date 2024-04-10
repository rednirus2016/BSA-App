/* eslint-disable prettier/prettier */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Loginstack from './Loginstack';
import Doctor from '../Screens/Doctors/Doctor';

const Drawer = createDrawerNavigator();
function Routes() {
    return (
        <NavigationContainer>
            <Loginstack />
        </NavigationContainer>
    );
}
export default Routes;

