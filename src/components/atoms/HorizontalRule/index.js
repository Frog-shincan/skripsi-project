import React from 'react';
import { View } from 'react-native';
import { colors } from '../../../utils/colors';

const styles = {
    wrapper: {
        paddingVertical: 5,
        borderBottomColor: colors.rule,
        borderBottomWidth: 2,
    },
};

const HorizontalRule = () => {
    return (
        <View style={styles.wrapper} />
    )
};

export default HorizontalRule;
