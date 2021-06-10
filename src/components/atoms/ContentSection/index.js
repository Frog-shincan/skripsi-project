import React from 'react';
import ImageModal from 'react-native-image-modal';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { REACT_APP_HOST_API } from '../../../utils/constant';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = {
    chapterTitle: {
        marginTop: 25,
        fontSize: 18,
        fontWeight: 'bold',
    },
    imageWrapper: {
        marginTop: 10,
        flexDirection: 'row',
    },
    imageContent: {
        width: windowWidth / 1.3,
        height: windowHeight / 2.3,
        marginRight: 10,
    },
};

const ContentSection = (props) => {
    return (
        <View>
            <Text style={styles.chapterTitle}>{props.title}</Text>
            <View style={styles.imageWrapper}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    props.images.map((image) => (
                        <ImageModal
                            key={image.id}
                            resizeMode="contain"
                            imageBackgroundColor="transparent"
                            style={styles.imageContent}
                            source={{
                                uri: `${REACT_APP_HOST_API}${image.url}`,
                            }}
                        />
                    ))
                }
                </ScrollView>
            </View>
        </View>
    )
};

export default ContentSection;
