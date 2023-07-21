import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

interface propsTypes {
    setCurrent: Function
}

export default function index(props: propsTypes) {

    const { setCurrent } = props

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={.8}
                style={styles.items}
                onPress={() => setCurrent(1)}
            >
                <Image style={styles.icon} source={require('../../assets/home.png')} />
                <Text style={styles.font}>首页</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={.8}
                style={styles.items}
                onPress={() => setCurrent(2)}
            >
                <Image style={styles.icon} source={require('../../assets/video.png')} />
                <Text style={styles.font}>视频页</Text>
            </TouchableOpacity>

            <TouchableOpacity
                activeOpacity={.8}
                style={styles.items}
                onPress={() => setCurrent(3)}
            >
                <Image style={styles.icon} source={require('../../assets/user.png')} />
                <Text style={styles.font}>个人信息</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
    },
    items: {
        backgroundColor: '#DBDBDB',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    font: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    icon: {
        height: 15,
        width: 15,
        marginTop: 3,
        marginRight: 5
    }
})