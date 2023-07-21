import { View, Text, Image, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

export default function index() {
    return (
        <View >
            <Image source={require('../../assets/userBg.png')} style={styles.bgImg} />
            <Image source={require('../../assets/avator.jpg')} style={styles.avator} />

            <View style={styles.contextBox}>
                <View style={styles.userInfoBox}>
                    <Text style={styles.userNameFont}>HurayChung</Text>
                    <Text >通行证ID：1145141919810</Text>
                </View>

                <Text>帅照：</Text>
                <TouchableOpacity>
                    <View style={styles.plusArea}>
                        <Image source={require('../../assets/plus.png')} style={styles.plusImg} />
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    bgImg: {
        height: '30%',
        width: '100%',
        resizeMode: 'stretch'
    },
    avator: {
        height: 80,
        width: 80,
        left: 30,
        top: -30,
        borderRadius: 50,
        resizeMode: 'stretch'
    },
    contextBox: {
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
    },
    userInfoBox: {
        marginBottom: 30
    },
    userNameFont: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    plusArea: {
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: "#666",
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    plusImg: {
        height: 50,
        width: 50
    }
})