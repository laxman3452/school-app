import React from 'react'


import {
    View,

    StyleSheet,
    useColorScheme,
    Text,
    
} from 'react-native'
import HomeHeader from './Components/HomeHeader'
import HomeProfileBanner from './Components/HomeProfileBanner'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    
    return(
        <View style={styles.home}>
            <HomeHeader />
            <HomeProfileBanner />
        </View>
       


     
       
       







    )
}

const styles = StyleSheet.create({

    home:{
        flex:1,
        backgroundColor:'#E7EAF1'
        
    }
    



})

export default AppPro