import React from 'react'
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import { w } from '../parameters'


const ImageCard = ({ urls, user, onPress, description }) => {
    return(
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <View style={styles.sub}>
                 <Image style={styles.cover} source={{uri: urls.small}}/>
            </View>
            <Text style={styles.h1}> { user.name } </Text>
            <Text style={styles.h1}> { description } </Text>
        </View>
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        width: w / 2.1
    },
    sub: {
        padding: 10
    },
    h1: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: w/2.4,
        color: 'black'
    },
    cover: {
        width: w / 2.3,
        height: w * 0.60,
        borderRadius: 10
    }
})

export default ImageCard 