import React from 'react';
import { View, Text, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { colors } from '../../../utils/colors';
import LogoHarmoni from '../../../assets/logo/LogoHarmoni.png';
import ReadingIcon from '../../../assets/icon/ReadingIcon.svg';
import WritingIcon from '../../../assets/icon/WritingIcon.svg';
import ListeningIcon from '../../../assets/icon/ListeningIcon.svg';
import { CoursesButton, ExerciseTasks } from '../../../components/atoms';


const windowHeight = Dimensions.get('window').height;

const styles = {
    wrapper: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: colors.default,
        paddingVertical: 20,
        paddingHorizontal: 8,
    },
    logoHome: {
        width: 160,
        height: 150,
        alignSelf: 'flex-end',
    },
    bannerWrapper: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 20,
        marginTop: 30,
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
        flex: 1,
        height: '100%',
        backgroundColor: '#E4E7E4',
        paddingHorizontal: 30,
        paddingTop: 20,
        paddingBottom: 40,
        borderTopRightRadius: 25, 
        borderTopLeftRadius: 25,
    },
};

const HomeScreen = ({navigation}) => {
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
                    <ExerciseTasks taskDate="06-05-2021" taskTitle="Latihan Reading" taskDeadline="06-06-2021" 
                    onPress={() => navigation.navigate('ExerciseDetail', {id: '1'})} />
                    <ExerciseTasks taskDate="07-05-2021" taskTitle="Latihan Writing" taskDeadline="07-06-2021" 
                    onPress={() => navigation.navigate('ExerciseDetail', {id: '2'})} />
                    <ExerciseTasks taskDate="08-05-2021" taskTitle="Latihan Listening" taskDeadline="08-06-2021" 
                    onPress={() => navigation.navigate('ExerciseDetail', {id: '3'})} />
                    <ExerciseTasks taskDate="09-05-2021" taskTitle="Latihan Reading" taskDeadline="09-06-2021" 
                    onPress={() => navigation.navigate('ExerciseDetail', {id: '4'})} />
                    <ExerciseTasks taskDate="10-05-2021" taskTitle="Latihan Writing" taskDeadline="10-06-2021" 
                    onPress={() => navigation.navigate('ExerciseDetail', {id: '5'})} />
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen;