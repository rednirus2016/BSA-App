import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import navigationStrings from '../../constants/navigationStrings';
import imagePath from '../../constants/imagePath';
import { height, moderateScale, moderateScaleVertical, width } from '../../styles/responsiveSize';
import colors from '../../styles/colors';
import WrapperContainer from '../../components/WrapperContainer';
import commonStyles from '../../styles/commonStyles';

const Splash = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);
  const Splash = () => {
    setTimeout(() => {
      setAnimating(false);
       navigation.replace(navigationStrings.HOME)
    }, 1200);
  }
  useEffect(() => {
    Splash();
  }, []);
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <Image source={imagePath.LOGO} style={styles.img} />
      </View>
      <View style={{ justifyContent: "flex-end",top:moderateScaleVertical(50)}}>
        <Image source={imagePath.SPONSAR} style={{ alignSelf: "center",width:"100%",resizeMode:"center" }} />
      </View>
    </WrapperContainer>
  )
}
export default Splash;
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center"
  },
  img: {
    height:moderateScale(180),
    width: moderateScale(180),
    resizeMode: "contain",
    alignSelf: "center"
  }
});
