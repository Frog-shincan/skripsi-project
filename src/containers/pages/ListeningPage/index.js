import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../../utils/colors';
import BackIcon from '../../../assets/logo/BackIcon.png';
import ListeningIllustration from '../../../assets/image/ListeningIllustration.svg'
import { IconButton } from '../../../components/atoms';

const styles = {
    wrapper: {
        flex: 1,
        padding: 20,
    },
    illustrationWrapper: {
        marginTop: 10,
        alignSelf: 'center',
    },
    bannerText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.primary,
        marginTop: 16,
        maxWidth: 225,
        textAlign: 'center',
        alignSelf: 'center',
    },
}

const ListeningPage = ({navigation}) => {
    return (
        <View style={styles.wrapper}>
            <IconButton iconSource={BackIcon} width={40} height={40} onPress={() => navigation.navigate('HomeScreen')} />
            <ListeningIllustration width={200} height={200} style={styles.illustrationWrapper} />
            <Text style={styles.bannerText}>
                This is Listening Courses, {"\n"} Please Listen The Audio Below
            </Text>
        </View>
    )
}

export default ListeningPage;
