import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import LogoHarmoni from '../../../assets/logo/LogoHarmoni.png';
import { colors } from '../../../utils/colors';

const styles = {
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.default,
    },
    logoSplash: {
        width: 330,
        height: 310,
    },
}

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('HomeScreen');
        }, 2000);
    }, [])

    return (
        <View style={styles.wrapper}>
            <Image
                style={styles.logoSplash}
                source={LogoHarmoni}
            />
        </View>
    )
}

export default Splash;
