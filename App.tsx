import React from 'react';
import Splash from './src/components/splash'
import IndexRouter from './src/routers'
import { StyleSheet, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Splash timeout={2000} />
            <IndexRouter />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    }
})
