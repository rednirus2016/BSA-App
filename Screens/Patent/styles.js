import { StyleSheet } from 'react-native'
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import { moderateScaleVertical, width } from '../../styles/responsiveSize';


const styles = StyleSheet.create({
    headerview: {
        backgroundColor: colors.theme,
        width: width,
        height: "7%",
    },
    outerview: {
        padding: moderateScaleVertical(10),

    },
    view1: {
        color: 'black',
        ...commonStyles.shadowStyle,
        padding: moderateScaleVertical(10)

    },
    txt1:
    {
        ...commonStyles.fontSize15,
        color: colors.btncolor,
        fontWeight: "bold",
    },
    txt2:
    {
        ...commonStyles.fontSize13,
        color: colors.black,
    },

});
export default styles;