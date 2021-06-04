import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const IconButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Image source={props.iconSource} style={{width: props.width, height: props.height}} />
        </TouchableOpacity>
    )
}

export default IconButton;