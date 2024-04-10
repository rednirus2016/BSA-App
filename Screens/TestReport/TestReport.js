import { View, FlatList, Image } from 'react-native'
import React from 'react';
import styles from './styles';
import Toptabs from '../../components/Toptabs';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import { moderateScaleVertical, moderateScale } from '../../styles/responsiveSize';
import WrapperContainer from '../../components/WrapperContainer';
import PDF from '../../components/PDF';

const TestReport = () => {
    let bkcolor;
    const Reports = [
        { key: "1", name: "Report", IMG: imagePath.PDF, info: "Finished Product Certificate of Analysis" },
    ]
    return (
        <WrapperContainer>
            <View style={styles.headerview}>
                <Toptabs heading1="Test Reports" imag={imagePath.LEFT_ARROW} />
            </View>
            <View style={{ padding: moderateScaleVertical(20), marginBottom: moderateScaleVertical(50) }}>
                <FlatList
                    data={Reports}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{ padding: moderateScaleVertical(5) }}>
                                <PDF name={item.name} info={item.info} />
                            </View>
                        )
                    }
                    }
                />
            </View>
        </WrapperContainer >
    )
}
export default TestReport;
