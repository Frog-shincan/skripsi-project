import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const styles = {
    iconWrapper: {
        width: 100,
        height: 100,
        marginTop: 20,
        paddingHorizontal: 3,
    },
    courseIcon: {
        padding: 20,
        backgroundColor: 'aquamarine',
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    courseLabel: {
        marginTop: 7,
        fontSize: 15,
        textAlign: 'center',
    },
};

const CoursesButton = (props) => {
    return (
        <View style={styles.iconWrapper} key={props.label}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={styles.courseIcon}>
                    {props.children}
                </View>
            </TouchableOpacity>
            <Text style={styles.courseLabel}>{props.label}</Text>
        </View>
    )
};

export default CoursesButton;
