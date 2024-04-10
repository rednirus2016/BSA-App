import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import navigationStrings from '../constants/navigationStrings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Divisoncat, Favorite, Home, Patent, Presentation, ProductDetail,
    Search, Visualfull, TestReport, TrainingModule, Login, ForgetPassword, Signup,DrawerNav
} from '../Screens';
import DoctorDetails from '../Screens/Doctors/DoctorDetails';
import Visual from '../Screens/Doctors/Visual';
import Logout from './Logout';
import AddProducts from '../Screens/AddProducts';
import Productmodal from '../components/Productmodal';
import ProductData from '../Screens/ProductData';

const Stack = createStackNavigator();
function Homestack() {
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('user')
            const user = JSON.parse(jsonValue);
        } catch (e) {

        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={{ headerShown: false }}  >
                <Stack.Screen name={navigationStrings.HOME} component={Home} />
                <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
                <Stack.Screen name={navigationStrings.FORGETPASSWORD} component={ForgetPassword} />
                <Stack.Screen name={navigationStrings.SEARCH} component={Search} />
                <Stack.Screen name={navigationStrings.PRODUCTDETAIL} component={ProductDetail} />
                <Stack.Screen name={navigationStrings.DIVISIONCAT} component={Divisoncat} />
                <Stack.Screen name={navigationStrings.PATENT} component={Patent} />
                <Stack.Screen name={navigationStrings.VISUALFULL} component={Visualfull} />
                <Stack.Screen name={navigationStrings.FAVORITE} component={Favorite} />
                <Stack.Screen name={navigationStrings.PRESENTATION} component={Presentation} />
                <Stack.Screen name={navigationStrings.TESTREPORT} component={TestReport} />
                <Stack.Screen name={navigationStrings.TRAINIG} component={TrainingModule} />
                <Stack.Screen name={navigationStrings.DoctorDetails} component={DoctorDetails} />
                <Stack.Screen name={navigationStrings.VISUAL} component={Visual} />
                <Stack.Screen name={navigationStrings.LOGOUT} component={Logout}/>
                <Stack.Screen name={navigationStrings.ADDPRODUCTS} component={AddProducts}/>
                <Stack.Screen name={navigationStrings.Productmodal} component={Productmodal}/>
                <Stack.Screen  name={navigationStrings.ProductData} component={ProductData}/>
            </Stack.Navigator>
        </>
    )
}
export default Homestack;
