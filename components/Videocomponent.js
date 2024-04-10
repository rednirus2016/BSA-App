import { View, Text, TouchableOpacity, Image, Linking, StyleSheet } from 'react-native'
import React from 'react';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import imagePath from '../constants/imagePath';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';

const Videocomponent = (props) => {
    return (
        <View style={[styles.view1, { backgroundColor: colors.whitegreen, justifyContent: "center", }]}>
            <View style={{ flex: 0.25, justifyContent: "center", }}>
                <Image source={imagePath.VICON1} style={{ ...commonStyles.Img70, alignSelf: "center", }} />
            </View>

            <View style={{ flex: 0.60, padding: moderateScaleVertical(10), }}>
                <Text style={{ ...commonStyles.fontSize14, color: colors.btncolor, alignSelf: "flex-start", fontWeight: "bold" }} numberOfLines={4}>
                    {props.name}
                </Text>
            </View>
            <View style={{ flex: 0.20, justifyContent: "space-evenly" }}>
                <View style={styles.inner1}>
                    <TouchableOpacity onPress={() => { Linking.openURL(props.Link1) }}>
                        <Image source={imagePath.PLAY_BUTTON} style={{ ...commonStyles.Img50, alignSelf: "center", tintColor: colors.btncolor }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}
export default Videocomponent;

const styles = StyleSheet.create({
    view1: {

        height: moderateScale(100),
        width: "100%",
        ...commonStyles.shadowStyle,
        borderRadius: moderateScaleVertical(15),
        padding: moderateScaleVertical(7),
        flexDirection: "row",
        flex: 1,

    },
    imgview: {
        height: moderateScale(100),
        width: "100%",
        padding: moderateScale(10),
        justifyContent: "space-between",
        flexDirection: "row",
    },
    button: {
        width: '80%',
        padding: moderateScaleVertical(10),
        margin: moderateScaleVertical(10),
    },
    inner1: {
        flex: 0.20,
        justifyContent: "center", top: moderateScaleVertical(20)
    },
});