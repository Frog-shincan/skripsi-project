import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LogBox, View, Text } from 'react-native';
import { colors } from '../../../utils/colors';
import BackIcon from '../../../assets/logo/BackIcon.png';
import ListeningIllustration from '../../../assets/image/ListeningIllustration.svg'
import { IconButton } from '../../../components/atoms';
import TrackPlayer from 'react-native-track-player';
import { TouchableOpacity } from 'react-native-gesture-handler';

LogBox.ignoreLogs(['TrackPlayer is not defined']);

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
    listeningTitle: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonWrapper: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    buttonContent: {
        backgroundColor: colors.rule,
        padding: 10,
        borderRadius: 10,
        margin: 10,
        width: 150,
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
    },
}

TrackPlayer.updateOptions({
    stopWithApp: false,
    capabilities: [TrackPlayer.CAPABILITY_PLAY, TrackPlayer.CAPABILITY_PAUSE],
    compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
    ],
});

const ListeningPage = ({navigation}) => {
    const [courses, setCourses] = useState([]);

    const startPlay = async (sound) => {
        await TrackPlayer.setupPlayer();

        await TrackPlayer.add({
            url: sound,
        });
    
        await TrackPlayer.play();
    };

    const pausePlay = async () => await TrackPlayer.pause();

    useEffect(() => {
        return () => TrackPlayer.destroy();
      }, []);

      useEffect(() => {
        axios.get('http://192.168.100.9:1337/listening-courses/')
            .then((res) => setCourses(res.data));
      }, []);

    return (
        <View style={styles.wrapper}>
            <IconButton iconSource={BackIcon} width={40} height={40} onPress={() => navigation.navigate('HomeScreen')} />
            <ListeningIllustration width={200} height={200} style={styles.illustrationWrapper} />
            <Text style={styles.bannerText}>
                This is Listening Courses, {"\n"} Please Listen The Audio Below
            </Text>
            {
                courses.map((course, index) => (
                    <View key={course.id}>
                        <Text style={styles.listeningTitle}>{index + 1}. {course.chapter}</Text>
                        <View style={styles.buttonWrapper}>
                            <TouchableOpacity style={styles.buttonContent} onPress={() => pausePlay()}>
                                <Text style={styles.buttonText}>Pause</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContent} onPress={() => startPlay(`http://192.168.100.9:1337${course.audio[0].url}`)}>
                                <Text style={styles.buttonText}>Play</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

export default ListeningPage;
