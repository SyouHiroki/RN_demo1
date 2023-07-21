import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Video from 'react-native-video';

interface propsTypes {
    uri: string,
    id?: number,
    discribe?: string
}

export default function index(props: propsTypes) {

    const { uri, discribe, id } = props

    return (
        <View style={styles.container}>
            <Text style={styles.font}>{discribe}</Text>
            <Video
                source={{ uri: uri }}
                controls={true}
                paused={true}
                style={{
                    height: '100%',
                    width: '100%'
                }}
            />
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height * .3,
        width: '100%',
        marginBottom: 20,
    },
    font: {
        paddingLeft: 20
    }
})