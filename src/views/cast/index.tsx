import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import VideoCard from '../../components/videoCard'
import { videoList } from '../../api/videoList'

export default function index() {
    return (
        // <View>
        //     <VideoCard />
        //     <VideoCard />

        // </View>

        <FlatList
            data={videoList}
            renderItem={({ item }) => (
                <VideoCard uri={item.uri} id={item.id} discribe={item.discribe} />
            )}
            keyExtractor={item => item.id + item.discribe}

        />
    )
}

const styles = StyleSheet.create({

})