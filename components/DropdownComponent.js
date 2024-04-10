import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';

const data = [
    { label: 'Tablets', value: '1' },
    { label: 'Capsules', value: '2' },
    { label: 'Ointments', value: '3' },
    { label: 'Syrup', value: '4' },
    { label: 'Injectable', value: '5' },
    { label: 'Eye and Ear Drops', value: '6' },
    { label: 'Dental Range', value: '7' },
    { label: 'Sachet', value: '8' },
    { label: 'Herbal', value: '9' },
    { label: 'Anti-Diabetics ', value: '10' },
    { label: 'Cardiac Products', value: '11' },
    { label: 'Thyroxine Range', value: '12' },
    { label: 'Lotion Section', value: '13' },
];
const data2 = [
    { label: 'Orthocare', value: '1' },
    { label: 'Gynacare', value: '2' },
    { label: 'Dibcard', value: '3' },
    { label: 'BSA Pharma', value: '4' },
    { label: 'BSA Herbal', value: '5' },
    { label: 'Vetcare', value: '6' },
    { label: 'SG Bioscience', value: '7' },

];

const DropdownComponent = (props) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    return (
        <View style={styles.container}>
            {/* {renderLabel()} */}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: colors.Ytheme }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data2}
                // data={props.catdata}
                //search
                maxHeight={350}
                showsVerticalScrollIndicator={false}
                placeholder={<Text style={{ ...commonStyles.fontSize16, color: colors.black, alignSelf: "center", right: 0, }}>{props.selectname}</Text>}
                labelField="label"
                valueField="value"
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}

            />
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    dropdown: {
        height: moderateScale(45),

        borderColor: colors.btncolor,
        borderWidth: 1,
        justifyContent: "center",
        paddingHorizontal: moderateScaleVertical(15),
    },
    icon: {
        marginRight: moderateScaleVertical(5), ...commonStyles.Img20
    },
    label: {
        position: 'absolute',
        backgroundColor: '#000',
        left: moderateScaleVertical(22),
        top: 8,
        zIndex: 999,
        paddingHorizontal: moderateScaleVertical(8),
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16, color: colors.black,
    },
    selectedTextStyle: {
        ...commonStyles.fontSize16,
        color: colors.black,
        alignSelf: "center",
        right: 0,
    },
    iconStyle: {
        ...commonStyles.Img20
    },
    inputSearchStyle: {
        height: moderateScale(40),
        fontSize: 16,
        color: colors.black
    },
    sellerbox: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: moderateScale(45),
        borderColor: colors.btncolor,
        borderWidth: 1
    },
});