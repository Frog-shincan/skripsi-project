import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import ImageModal from 'react-native-image-modal';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = {
    chapterTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 25,
    },
    imageWrapper: {
        marginTop: 10,
        flexDirection: 'row',
    },
    imageContent: {
        marginRight: 10,
        width: windowWidth / 1.3,
        height: windowHeight / 2.3,
    },
}

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
                            imageBackgroundColor="#FFFFFF"
                            style={styles.imageContent}
                            source={{
                                uri: `http://192.168.100.9:1337${image.formats.large.url}`,
                            }}
                        />
                    ))
                }
                </ScrollView>
            </View>
        </View>
    )
}

export default ContentSection;
