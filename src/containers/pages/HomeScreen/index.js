import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { colors } from '../../../utils/colors';
import { CoursesButton, ExerciseTasks } from '../../../components/atoms';
import { REACT_APP_HOST_API } from '../../../utils/constant';
import LogoHarmoni from '../../../assets/logo/LogoHarmoni.png';
import ReadingIcon from '../../../assets/icon/ReadingIcon.svg';
import WritingIcon from '../../../assets/icon/WritingIcon.svg';
import ListeningIcon from '../../../assets/icon/ListeningIcon.svg';

const windowHeight = Dimensions.get('window').height;

const styles = {
    wrapper: {
        flex: 1,
    },
    header: {
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 8,
        flexDirection: 'row',
        backgroundColor: colors.default,
    },
    logoHome: {
        width: 160,
        height: 150,
        alignSelf: 'flex-end',
    },
    bannerWrapper: {
        marginTop: 30,
        paddingLeft: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    bannerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary,
    },
    coursesWrapper: {
        height: windowHeight / 3,
        paddingHorizontal: 30,
        paddingTop: 15,
    },
    label: {
        fontSize: 21,
        fontWeight: 'bold',
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    exercisesWrapper: {
        height: '100%',
        paddingTop: 20,
        paddingBottom: 40,
        paddingHorizontal: 30,
        flex: 1,
        backgroundColor: '#E4E7E4',
        borderTopRightRadius: 25, 
        borderTopLeftRadius: 25,
    },
};

const HomeScreen = ({navigation}) => {
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        axios.get(`${REACT_APP_HOST_API}/tasks/`)
            .then((res) => setTaskList(res.data));
    }, []);

    return (
        <View style={styles.wrapper}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.bannerWrapper}>
                        <Text style={styles.bannerText}>
                            Welcome To,
                        </Text>
                        <Text style={styles.bannerText}>
                            Harmoni Mandarin App
                        </Text>
                    </View>
                    <ImageBackground source={LogoHarmoni} style={styles.logoHome} />
                </View>
                <View style={styles.coursesWrapper}>
                    <Text style={styles.label}>Learning Courses</Text>
                    <View style={styles.iconContainer}>
                        <CoursesButton label="Reading" onPress={() => navigation.navigate('ReadingPage')}>
                            <ReadingIcon />
                        </CoursesButton>
                        <CoursesButton label="Writing" onPress={() => navigation.navigate('WritingPage')}>
                            <WritingIcon />
                        </CoursesButton>
                        <CoursesButton label="Listening" onPress={() => navigation.navigate('ListeningPage')}>
                            <ListeningIcon />
                        </CoursesButton>
                    </View>
                </View>
                <View style={styles.exercisesWrapper}>
                    <Text style={styles.label}>Exercises Tasks</Text>
                    {
                        taskList.map(task => (
                            <ExerciseTasks key={task.id} taskDate={task.task_date} taskTitle={task.task_name} taskDeadline={task.task_deadline} 
                            onPress={() => navigation.navigate('ExerciseDetail', {id: task.id})} />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
};

export default HomeScreen;
