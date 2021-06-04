import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { colors } from '../../../utils/colors';

const styles = {
    buttonWrapper: {
        marginBottom: 30,
        width: 222,
    },
    buttonStyles: {
        backgroundColor: colors.primary,
        borderRadius: 15,
        paddingVertical: 15,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',
    },
}

const ActionButton = (props) => {
    return (
        <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.buttonStyles} onPress={props.onPress}>
                <Text style={styles.buttonText}>
                    {props.name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ActionButton;