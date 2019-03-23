import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


const Header = ({ onPress, leftIcon, leftColor, detail }) => (
    <View style={styles.viewStyle}>
        <TouchableOpacity onPress={onPress}>
          <Ionicons name={leftIcon} style={[styles.leftButtonStyle, { paddingLeft: detail ? 10 : 25 } ]} color={leftColor}/>
        </TouchableOpacity>
        <Text style={[styles.TextStyle, { paddingLeft: leftIcon ? 20 : 0 }]}> { leftIcon ? 'Photo details' : 'Photo Gallery !'  } </Text>
    </View>
)


const styles = StyleSheet.create({
    viewStyle: {
      flexDirection: 'row',
      height: 90,
      paddingLeft: 22,
      paddingTop: 30,
      backgroundColor: '#30d0fe',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      elevation: 10,
      position: 'relative'
    },
    TextStyle: {
      color: '#fff',
      fontSize: 28,
      fontFamily: 'AvenirNext-DemiBold'
    },
    leftButtonStyle: {
      fontSize: 35
    }
  })
  

export default Header