import { View, StyleSheet } from 'react-native'
import Home from '../views/home'
import Cast from '../views/cast'
import User from '../views/user'
import Dock from '../components/dock'
import React, { useState } from 'react'

const tabSwitcher = (current: number) => {
    switch (current) {
        case 1:
            return <Home />

        case 2:
            return <Cast />

        case 3:
            return <User />

        default:
            return null
    }
}

export default function index() {

    const [current, setCurrent] = useState(1)

    return (
        <View style={styles.container}>
            <View style={styles.context}>{tabSwitcher(current)}</View>
            <Dock setCurrent={setCurrent} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    context: {
        flex: 1
    }
}) 