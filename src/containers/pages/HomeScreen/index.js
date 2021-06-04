import React from 'react';
import { Image, View, Text } from 'react-native';
import { ActionButton } from '../../../components/atoms';
import { colors } from '../../../utils/colors';
import LogoHarmoni from '../../../assets/logo/LogoHarmoni.png';

const styles = {
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.default,
    },
    logoHome: {
        width: 240,
        height: 225,
        marginBottom: 6,
    },
    bannerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 40,
    },
}

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.wrapper}>
            <Image source={LogoHarmoni} style={styles.logoHome} />
                <Text style={styles.bannerText}>
                    Harmoni Mandarin App
                </Text>
                <ActionButton name="Reading Courses" onPress={() => navigation.navigate('ReadingPage')} />
                <ActionButton name="Writing Courses" onPress={() => navigation.navigate('WritingPage')} />
                <ActionButton name="Listening Courses" onPress={() => navigation.navigate('ListeningPage')} />
        </View>
    )
}

export default HomeScreen;