import React, {Component} from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import HeaderUi from '../ui/HeaderUi'
import ImageCardUi from '../ui/ImageCardUi'
import { PHOTO_DETAILS } from '../navigations/routes_navigation'


const url = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'

export default class GalleryPageComponent extends Component {

  componentDidMount = async() => {
    try {
      const { loadPhoto } = this.props
      const response = await fetch(url)
      const data = await response.json()
      loadPhoto(data)
    } catch(e) {
      throw e
    }
  }

  render() {
    const { gallery_reducer, loadIsReady, navigation } = this.props;
    if ( loadIsReady ) {
      return (
      <View>
        <HeaderUi /> 
          <ScrollView>
            <View style={styles.container}>
              { gallery_reducer.map((item, i)  => <ImageCardUi {...item} key={i} onPress={() => navigation.navigate(PHOTO_DETAILS, (item))}/> )}
            </View>
          </ScrollView>
      </View>
      );
    } else {
      return <Text> Loading... </Text>  
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 150
  }
})

