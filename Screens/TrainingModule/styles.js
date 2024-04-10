
import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import commonStyles from "../../styles/commonStyles";
import { moderateScale, moderateScaleVertical, width } from "../../styles/responsiveSize";
const styles = StyleSheet.create({
    headerview:
    {
        backgroundColor: colors.whitegreen,
        justifyContent: "center", height: "7%",
    },
    outerview: {
         marginBottom: moderateScaleVertical(50)
    },
   
});
export default styles;