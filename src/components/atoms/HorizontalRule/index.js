import React from 'react';
import { View } from 'react-native';
import { colors } from '../../../utils/colors';

const styles = {
    wrapper: {
        borderBottomColor: colors.rule,
        borderBottomWidth: 2,
        paddingVertical: 5,
    },
}

const HorizontalRule = () => {
    return (
        <View style={styles.wrapper} />
    )
}

export default HorizontalRule;
