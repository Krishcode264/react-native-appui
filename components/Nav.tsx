import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome5'
export default function Nav() {

    
  return (
    <View style={styles.NavContainer}>
<Icon name='home' color="red"size={30}/>
<Icon name='home' color="red"size={30}/>
    </View>
  )
}

const styles = StyleSheet.create({
    NavContainer:{
        borderColor:"white",
        borderWidth:2,

    },
    icon:{
        fontSize:30
    },
    navImg:{

    }
})