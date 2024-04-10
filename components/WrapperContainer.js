import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet, View
} from "react-native";
import colors from "../styles/colors";
import { moderateScaleVertical } from "../styles/responsiveSize";
import Loader from './Loader'
const WrapperContainer = ({
  children,
  isLoading,
  statusBarColor = colors.btncolor,
  bodycolor = '#fff',
  barStyle = "light-content",
  style,
}) => {
  return (
    <View style={{ flex: 1, backgroundColor: bodycolor }}>
      <StatusBar
      //  hidden={false}
        translucent={false}
        backgroundColor={statusBarColor}
        barStyle={barStyle}
      />
      <SafeAreaView style={{ ...styles.container, ...style }}>
        {children}
      </SafeAreaView>
      <Loader isLoading={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
    flex: 1,
    // paddingHorizontal: moderateScale(24),
  },
  headerStyle: {
    alignItems: "center",
    paddingHorizontal: 0,
    marginBottom: moderateScaleVertical(24),
  },
});
export default WrapperContainer;
