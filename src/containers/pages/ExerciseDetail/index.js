import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';

import ImageModal from 'react-native-image-modal';
import TrackPlayer from 'react-native-track-player';
import { colors } from '../../../utils/colors';
import BackIcon from '../../../assets/logo/BackIcon.png';
import TasksIllustration from '../../../assets/image/TasksIllustration.svg'
import { IconButton, HorizontalRule } from '../../../components/atoms';
import { ScrollView } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
        fontSize: 21,
        fontWeight: 'bold',
        color: colors.primary,
        marginTop: 16,
        maxWidth: 225,
        textAlign: 'center',
        alignSelf: 'center',
    },
    taskWrapper: {
        marginTop: 20,
    },
    taskText: {
        fontSize: 16,
        paddingTop: 5,
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        textAlign: 'center',
    },
    questionWrapper: {
        flex: 1,
    },
    questionImage: {
        marginTop: 20,
        borderRadius: 20,
        width: windowWidth / 1.1,
        height: windowHeight / 2,
    },
    buttonWrapper: {
        flexDirection: 'row',
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

const ExerciseDetail = ({navigation, route}) => {
    const { id } = route.params;
    const [task, setTask] = useState({});
    const [taskQuestion, setTaskQuestion] = useState([]);

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
        axios.get(`http://192.168.100.9:1337/tasks/${id}`)
            .then((res) => {
                setTask(res.data);
                setTaskQuestion(res.data.task_question);
            });
    }, []);

    return (
        <View style={styles.wrapper}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
                <IconButton iconSource={BackIcon} width={40} height={40} onPress={() => navigation.navigate('HomeScreen')} />
                <TasksIllustration width={200} height={200} style={styles.illustrationWrapper} />
                <Text style={styles.bannerText}>
                    {task.task_name}
                </Text>
                <View style={styles.taskWrapper}>
                    <Text style={styles.taskText}>Exercise Type: {task.task_type}</Text>
                    <HorizontalRule />
                    <Text style={styles.taskText}>Task Date: {task.task_date}</Text>
                    <HorizontalRule />
                    <Text style={styles.taskText}>Task Deadline: {task.task_deadline}</Text>
                    <HorizontalRule />
                    <Text style={styles.taskText}>Task PIC: {task.task_pic}</Text>
                    <HorizontalRule />
                    <Text style={styles.taskText}>Assignment Name: {task.task_name_format}</Text>
                    <HorizontalRule />
                    <Text style={styles.taskText}>Assignment File: {task.task_file_format}</Text>
                    <HorizontalRule />
                    <Text style={styles.taskText}>Note: {task.task_note}</Text>
                    <HorizontalRule />
                    <Text style={styles.taskText}>Question: </Text>
                </View>
                <View style={styles.questionWrapper}>
                    {
                        taskQuestion.map((question, index) => (
                            !task.task_audio ? (
                                <View key={question.id}>
                                    <Text style={styles.questionText}>No: {index + 1}</Text>
                                    <HorizontalRule />
                                    <ImageModal
                                        key={question.id}
                                        resizeMode="contain"
                                        imageBackgroundColor="#FFFFFF"
                                        style={styles.questionImage}
                                        source={{
                                            uri: `http://192.168.100.9:1337${question.formats.large.url}`,
                                        }}
                                    />
                                </View>
                            ) : (
                                <View key={question.id} style={{flex: 1}}>
                                    <Text style={styles.questionText}>No: {index + 1}</Text>
                                    <HorizontalRule />
                                    <View style={styles.buttonWrapper}>
                                        <TouchableOpacity style={styles.buttonContent} onPress={() => pausePlay()}>
                                            <Text style={styles.buttonText}>Pause</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.buttonContent} onPress={() => startPlay(`http://192.168.100.9:1337${question.url}`)}>
                                            <Text style={styles.buttonText}>Play</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                )
                            )
                        )
                    }
                </View>
            </ScrollView>
        </View>
    )
}

export default ExerciseDetail;
