import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
const Profile = require('../img/profile.png')

const HomeProfileBanner = () => {
  return (
//    <View style={styles.containerParent}>
     <View style={styles.container}>
        <View style={styles.profilePicSection}>
            <View style={styles.profileImgContainer}>
             <Image source={Profile} style={styles.profileImg}></Image>

            </View>

        </View>
        <View style={styles.nameSection}>
            <View style={styles.regParent}>
                
                    <Text style={styles.reg}>
                        Regd No: 123456
                    </Text>

            </View>


                <Text style={styles.name}>
                   Hansika Parajuli
                </Text>


            <View style={styles.classAndSection}>
                <Text style={styles.class}>
                    standard: 5th
                </Text>
                <Text style={styles.section}>
                    Section: B
                </Text>
            
            </View>

        </View>
     </View>
//    </View>
  )
}


const styles = StyleSheet.create({


  container:{
    
    flexBasis:115,
    backgroundColor:'#4F83E9',
    borderRadius:8,
    padding:4,
    marginLeft:10,
    marginRight:10,
    marginTop:20,
    flexDirection:'row',
    
    
 


  },
  profilePicSection:{
    width:'30%',
    flexBasis:110,
    justifyContent:'center',
    alignItems:'center'
  },
  profileImgContainer:{
    height:75,
    width:75


  },
  profileImg:{
    height:'100%',
    width:'100%',
    

  },

  nameSection:{
    width:'65%',
    flexBasis:110,
    justifyContent:'space-between',
    marginLeft:5

  },
  regParent:{
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent:'center'


  },
  reg:{
    color:'#B57171',
    backgroundColor:"#E0DFC2",
    padding:0,
    margin:0,
    width:140,
    borderRadius:5
    
    
    



  },
  name:{
    fontWeight:'bold',
    fontSize:24,
    color:'white',
    width:250,

  },
  classAndSection:{
    flexBasis:30,
    flexDirection:'row',
    marginTop:10


  },
  class:{
    fontWeight:'bold',
    fontSize:14,
    color:'white',
    marginRight:10

  },
  section:{
    fontWeight:'bold',
    fontSize:14,
    color:'white',
    marginLeft:10

  }




})

export default HomeProfileBanner