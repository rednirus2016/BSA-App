import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import WrapperContainer from '../../components/WrapperContainer';
import Toptabs from '../../components/Toptabs';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import { height, moderateScaleVertical, width } from '../../styles/responsiveSize';



const Visualfull = ({ route }) => {
  const { VisiualPic } = route.params;

  return (
    <WrapperContainer>
      <View style={styles.headerview}>
        <Toptabs heading1="Visual Aid" image={imagePath.LEFT_ARROW} />
      </View>

      <View style={{ backgroundColor: colors.white, flex: 1 }}>
        {VisiualPic.map((arr, i) => {
          return (
            <View style={{ height: height, width: width, padding: moderateScaleVertical(10), }}>
              {arr.image ?
                <Image source={arr.image} style={{ height: "80%", width: "100%", resizeMode: "center" }} />
                : <Image source={imagePath.VISUAL} style={{ height: "80%", width: "100%", resizeMode: "center" }} />}
            </View>
          );
        })}
      </View>
    </WrapperContainer>
  )
};
export default Visualfull;
const styles =StyleSheet.create({
  headerview:{
    flex:1,
  },
})
