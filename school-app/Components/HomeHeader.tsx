import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
const Hamburger = require('../img/hamburger.png');
const Notification = require('../img/notification.png');

const HomeHeader = () => {
  return (
    <View style={styles.header}>
        <Image source={Hamburger} style={styles.img}></Image>

        
        <Text style={styles.title}>
            Home
        </Text>
        <Image source={Notification} style={styles.img}></Image>

    </View>
  )
}



const styles = StyleSheet.create({

    header: {
        
        flex: 1,
        flexDirection:'row',
        // alignItems: 'center',
        justifyContent: 'space-between',

        
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: 'black'
    },
    img:{
        height:34,
        width:34,
        marginTop:6
    },
    title:{
        fontWeight:'bold',
        fontSize:34,
        color:'black',
        


    },




})


export default HomeHeader