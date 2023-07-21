import { View, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

interface propsTypes {
    timeout: number
}

export default function index(props: propsTypes) {

    const { timeout } = props
    const [show, setShow] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, timeout);
    }, [])

    return (
        <View>
            {
                show && <Image
                    source={require('../../assets/splash.png')}
                    style={{
                        height: Dimensions.get('window').height,
                        width: Dimensions.get('window').width,
                        resizeMode: 'stretch'
                    }}
                />
            }
        </View>
    )
}