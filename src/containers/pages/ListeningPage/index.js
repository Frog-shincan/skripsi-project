import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TrackPlayer from 'react-native-track-player';
import { LogBox, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../../../utils/colors';
import { IconButton } from '../../../components/atoms';
import { REACT_APP_HOST_API } from '../../../utils/constant';
import BackIcon from '../../../assets/logo/BackIcon.png';
import ListeningIllustration from '../../../assets/image/ListeningIllustration.svg'

LogBox.ignoreLogs(['TrackPlayer is not defined']);

const styles = {
    wrapper: {
        padding: 20,
        flex: 1,
    },
    illustrationWrapper: {
        marginTop: 10,
        alignSelf: 'center',
    },
    bannerText: {
        maxWidth: 225,
        marginTop: 16,
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: colors.primary,
    },
    listeningTitle: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonWrapper: {
        marginBottom: 20,
        flexDirection: 'row',
    },
    buttonContent: {
        width: 150,
        margin: 10,
        padding: 10,
        backgroundColor: colors.rule,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
    },
};

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
        axios.get(`${REACT_APP_HOST_API}/listening-courses/`)
            .then((res) => setCourses(res.data));
      }, []);

    return (
        <View style={styles.wrapper}>
            <ScrollView showsHorizontalScrollIndicator={false}>
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
                                <TouchableOpacity style={styles.buttonContent} onPress={() => startPlay(`${REACT_APP_HOST_API}${course.audio[0].url}`)}>
                                    <Text style={styles.buttonText}>Play</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
};

export default ListeningPage;
