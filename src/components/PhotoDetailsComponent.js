import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'
import HeaderUi from '../ui/HeaderUi'
import { w, h } from '../parameters'


class PhotoDetailsComponent extends Component {
    render(){
        const { urls } = this.props.navigation.state.params
        const { navigation } = this.props
        return(
            <View>
                <View>
                    <HeaderUi detail onPress={() => navigation.goBack()} leftIcon='ios-arrow-back' leftColor='#fff'/>
                    <Image style={styles.cover} source={{uri: urls.small}}/>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    cover: {
        width: w,
        height: h - 90
    }
})

export default PhotoDetailsComponent
