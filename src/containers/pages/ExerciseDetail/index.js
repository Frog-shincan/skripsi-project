import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {WebView} from 'react-native-webview';
import { View, Text, Image, Dimensions } from 'react-native';
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
    audioWrapper: {
        backgroundColor: 'transparent',
    },
}

const ExerciseDetail = ({navigation, route}) => {
    const { id } = route.params;
    const [task, setTask] = useState({});
    const [taskQuestion, setTaskQuestion] = useState([]);

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
                                    <Image 
                                    source={{uri: `http://192.168.100.9:1337${question.formats.large.url}`}}
                                    style={styles.questionImage} /> 
                                </View>
                            ) : (
                                <View key={question.id} style={{flex: 1}}>
                                    <WebView
                                    style={styles.audioWrapper}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{ html: `
                                    <audio style="width: 100%;" controls>
                                    <source src="http://192.168.100.9:1337` + question.url + `"type="audio/mpeg">
                                    </audio>`}}/>
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
