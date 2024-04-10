import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import axios from 'axios';
import navigationStrings from '../../constants/navigationStrings';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import imagePath from '../../constants/imagePath';

const { width, height } = Dimensions.get('window');

export default function Visual({ route, navigation }) {
  const [visual, setVisual] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { id } = route.params || {};

  async function getVisual() {
    try {
      const { data } = await axios.get(
        `https://bsagroup.redniruscare.com/api/getvisual/user/${id}`
      );
      setVisual(data.visual);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getVisual();
  }, [id]);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const openImageModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  return (
    <ScrollView  showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}>
       <TouchableOpacity onPress={()=> navigation.navigate(navigationStrings.ProductData)}>
      <Image
              source={imagePath.LEFT_ARROW}
              style={styles.arrow}
              tintColor={colors.black}
            />
      </TouchableOpacity>
      {visual.map((item, index) => (
        <View key={item.id} style={{ marginTop: 20 }}>
          <TouchableOpacity onPress={() => openImageModal(index)}>
            <View style={styles.Visualview}>
              <Text
                style={{
                  ...commonStyles.fontSize18,
                  color: colors.white,
                  alignSelf: 'center',
                }}
              >
                {item.name}
              </Text>
              <Image
                source={imagePath.DROPUP}
                style={{
                  ...commonStyles.Img25,
                  tintColor: colors.white,
                  alignSelf: 'center',
                }}
              />
            </View>
          </TouchableOpacity>
          
        </View>
      ))}

      {showModal && (
        <Modal visible={showModal} transparent={true} onRequestClose={handleModalClose}>

           <TouchableOpacity onPress={()=> navigation.goBack()}>
      <Image
              source={imagePath.LEFT_ARROW}
              style={styles.arrow}
              tintColor={colors.red}
            />
      </TouchableOpacity>
           <ImageViewer
      imageUrls={[
        {
          url: `https://bsagroup.redniruscare.com/${visual[selectedImageIndex].visual}`,
        }
      ]}
      index={0} 
      enableSwipeDown={true}
      renderIndicator={() => null}
      onSwipeDown={handleModalClose}
      style={{width:width, height: "100%",position:"absolute",}}
    />
         
        </Modal>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  arrow:{
    flex:1,
    margin:40,
    height:20,
    width:25,
    color:"red",
    marginBottom:0,
  },
  Visualview: {
    backgroundColor: 'green',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 20,
    width: '80%',
  },
});


