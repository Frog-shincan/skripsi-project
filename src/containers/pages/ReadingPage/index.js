import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, ScrollView } from 'react-native';
import { colors } from '../../../utils/colors';
import BackIcon from '../../../assets/logo/BackIcon.png';
import ReadingIllustration from '../../../assets/image/ReadingIllustration.svg'
import { IconButton } from '../../../components/atoms';
import ContentSection from '../../../components/atoms/ContentSection';


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

const ReadingPage = ({navigation}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.100.9:1337/reading-courses/')
            .then((res) => setCourses(res.data));
    }, []);

    return (
        <View style={styles.wrapper}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
                <IconButton iconSource={BackIcon} width={40} height={40} onPress={() => navigation.navigate('HomeScreen')} />
                <ReadingIllustration width={200} height={200} style={styles.illustrationWrapper} />
                <Text style={styles.bannerText}>
                    This is Reading Courses, {"\n"} Please Follow The Picture Below
                </Text>
                {
                    courses.map((course,index) => 
                        <ContentSection key={course.id} title={`${index + 1} . ${course.chapter}`} images={course.images} 
                    />)
                }
            </ScrollView>
        </View>
    )
}

export default ReadingPage;
