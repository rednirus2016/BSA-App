import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

const SliderBoxes = () => {
  const images = [
    "https://bsagroup.redniruscare.com/Products/phpGFpxVI",
    "https://bsagroup.redniruscare.com/Products/phpqxtE3i",
    "https://bsagroup.redniruscare.com/Products/php57C0jB",
    "https://bsagroup.redniruscare.com/Products/phpp0pPig",
  ]
  return (
    <View style={styles.container}>
      <SliderBox
        images={images}
                   sliderBoxHeight={200}
                   onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                   dotColor="#FFEE58"
                   inactiveDotColor="#90A4AE"
                   paginationBoxVerticalPadding={20}
                   autoplay
                   circleLoop
      />
    </View>
  )
}
export default SliderBoxes

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});