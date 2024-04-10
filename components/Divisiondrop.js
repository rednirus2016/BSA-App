import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';

const Divisiondrop = (props) => {
    const data2 = [
        { label: 'All Products', value: '1' },
        { label: 'Ascending', value: '2' },
    ];
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

}
export default Divisiondrop;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    dropdown: {
        height: moderateScale(45),
        borderColor: colors.white,
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
        ...commonStyles.fontSize16, color: colors.black, alignSelf: "center", right: 0,
    },
    iconStyle: {
        ...commonStyles.Img20
    },
    inputSearchStyle: {
        height: moderateScale(40),
        fontSize: 16,
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