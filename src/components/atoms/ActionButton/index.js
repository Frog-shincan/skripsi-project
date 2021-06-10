import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { colors } from '../../../utils/colors';

const styles = {
    buttonWrapper: {
        width: 222,
        marginBottom: 30,
    },
    buttonStyles: {
        paddingVertical: 15,
        backgroundColor: colors.primary,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        color: 'white',
    },
};

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
};

export default ActionButton;
