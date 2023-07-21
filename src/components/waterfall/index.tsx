import { View, Text, Image, ScrollView, Dimensions, VirtualizedList, FlatList } from 'react-native'
import React, { useState } from 'react'
import { imgListTypes, imgList } from '../../api/imgList'
import { WATERFALL_LOAD_COUNT, WATERFALL_COLUMN } from '../../config/config'

const scrollEndHandler = (e: any, items: Array<imgListTypes>, start: number, end: number, setItems: Function, setStart: Function, setEnd: Function) => {
    let offsetY = e.nativeEvent.contentOffset.y
    let contentSizeHeight = e.nativeEvent.contentSize.height
    let oriageScrollHeight = e.nativeEvent.layoutMeasurement.height

    if (offsetY + oriageScrollHeight >= contentSizeHeight) {
        let newStart = start + WATERFALL_LOAD_COUNT
        let newEnd = end + WATERFALL_LOAD_COUNT

        setStart(newStart)
        setEnd(newEnd)
        setItems([...items, ...imgList.slice(newStart, newEnd)])
    }
}

// const getPicHeight = (fixedPicWidth: number, picWidth: number, picHeight: number) => {
//     return (fixedPicWidth / picWidth) * picHeight
// }

export default function index() {

    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(WATERFALL_LOAD_COUNT - 1)
    const [items, setItems] = useState(imgList.slice(start, end))
    const [fixedPicWidth] = useState(Dimensions.get('window').width / WATERFALL_COLUMN)
    const [fixPicHeight] = useState(Dimensions.get('window').height * .4)

    return (
        // <ScrollView
        //     onMomentumScrollEnd={e => scrollEndHandler(e, items, start, end, setItems, setStart, setEnd)}
        // >
        //     {
        //         items.map(item => <Image
        //             source={{ uri: item.thumbURL }}
        //             key={item.thumbURL}
        //             style={{
        //                 resizeMode: 'stretch',
        //                 width: fixedPicWidth - 10,
        //                 height: getPicHeight(fixedPicWidth, item.width, item.height),
        //             }}
        //         />)
        //     }
        // </ScrollView>

        //-----------------------------------------

        <FlatList
            data={items}
            renderItem={({ item }) => (<Image
                source={{ uri: item.thumbURL }}
                style={{
                    width: fixedPicWidth,
                    height: fixPicHeight
                }}
            />)}
            keyExtractor={item => item.thumbURL}
            horizontal={false}
            numColumns={WATERFALL_COLUMN}
            onMomentumScrollEnd={e => scrollEndHandler(e, items, start, end, setItems, setStart, setEnd)}
        />
    )
}