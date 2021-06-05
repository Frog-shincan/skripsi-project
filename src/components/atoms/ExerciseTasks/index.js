import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import TaskIcon from '../../../assets/icon/TaskIcon.svg';

const styles = {
    exerciseContainer: {
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: '#ADD7D8',
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        flexDirection: 'row',
    },
    taskIconWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    taskInfoWrapper: {
        paddingHorizontal: 20,
    },
    taskDate: {
        fontSize: 18,
        marginTop: 5,
        color: '#294D8D',
    },
    taskTitle: {
        fontSize: 18,
        marginTop: 5,
        color: '#C64EB4',
    },
    taskDeadline: {
        fontSize: 18,
        marginTop: 5,
        color: '#FF4D00'
    },
}

const ExerciseTasks = (props) => {
    return (
        <TouchableOpacity style={styles.exerciseContainer} onPress={props.onPress}>
            <View style={styles.taskIconWrapper}>
                <TaskIcon height={50} width={50} style={styles.taskIcon} />
            </View>
            <View style={styles.taskInfoWrapper}>
                <Text style={styles.taskDate}>Assigned: {props.taskDate}</Text>
                <Text style={styles.taskTitle}>Tasks: {props.taskTitle}</Text>
                <Text style={styles.taskDeadline}>Deadline: {props.taskDeadline}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ExerciseTasks;
