import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

const styles = {
    iconWrapper: {
        height: 100,
        width: 100,
        marginTop: 20,
        
    },
    courseIcon: {
        backgroundColor: 'aquamarine',
        padding: 20,
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
        fontSize: 15,
        textAlign: 'center',
        marginTop: 7,
    },
}

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
}

export default CoursesButton;
