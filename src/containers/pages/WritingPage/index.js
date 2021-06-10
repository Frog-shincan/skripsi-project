import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, ScrollView } from 'react-native';
import { colors } from '../../../utils/colors';
import { ContentSection, IconButton } from '../../../components/atoms';
import { REACT_APP_HOST_API } from '../../../utils/constant';
import BackIcon from '../../../assets/logo/BackIcon.png';
import WritingIllustration from '../../../assets/image/WritingIllustration.svg';

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
};

const WritingPage = ({navigation}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios.get(`${REACT_APP_HOST_API}/writing-courses/`)
            .then((res) => setCourses(res.data));
    }, []);

    return (
        <View style={styles.wrapper}>
            <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
                <IconButton iconSource={BackIcon} width={40} height={40} onPress={() => navigation.navigate('HomeScreen')} />
                <WritingIllustration width={200} height={200} style={styles.illustrationWrapper} />
                <Text style={styles.bannerText}>
                    This is Writing Courses, {"\n"} Please Follow The Text Below
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

export default WritingPage;
