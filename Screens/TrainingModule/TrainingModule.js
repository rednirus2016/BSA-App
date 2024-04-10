import { View, FlatList, Linking, } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from './styles';
import Toptabs from '../../components/Toptabs';
import imagePath from '../../constants/imagePath';
import WrapperContainer from '../../components/WrapperContainer';
import Videocomponent from '../../components/Videocomponent';
import { moderateScaleVertical } from '../../styles/responsiveSize';
import axios from 'axios';

const TrainingModule = () => {
    let bkcolor;
    const [product, setProduct] = useState([])
    const Searchbutton = async () => {
        const { data } = await axios.get('https://bsagroup.redniruscare.com/api/video');
        setProduct(data);
        console.log('hllo hlloikjhn', data);
    }
    useEffect(() => {
        Searchbutton();
        // console.log('data1234', data);
    }, [])

    const TrainingModulearray = [
        { key: "1", name: "CUR Q FRESH-BEST HERBAL ANTISEPTIC MOUTH WASH SOLUTION BY BSA PHARMA INC.MOUTH WASH SOLUTION BY BSA PHARMA INC.", Link1: 'https://youtu.be/Xwtu7xGhHDU', },
        { key: "2", name: "Ordex Forte Capsules,Syrup,Oil", Link1: 'https://youtu.be/Emf2jL8xs3A', },

    ]

    const openUrl = async (url) => {
        const IsSupported = await Linking.canOpenURL(url);
        if (IsSupported) {
            await Linking.openURL(url)
        }
        else (
            Alert.alert("Wrong Direction")
        )
    }
    return (
        <WrapperContainer>
            <View style={styles.headerview}>
                <Toptabs heading1="Training Modules" imag={imagePath.LEFT_ARROW} />
            </View>

            <View style={styles.outerview}>
                <FlatList
                    data={TrainingModulearray}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ padding: moderateScaleVertical(10), }}>
                                <Videocomponent
                                    name={item.name} Link1={item.url}
                                />
                            </View>
                        )
                    }
                    }
                />

            </View>

        </WrapperContainer >
    )
}
export default TrainingModule;