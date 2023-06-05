import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView'
import LinearGradient from 'react-native-linear-gradient'
import WorkTemplate from './components/WorkTemplate'
import Progeress from './components/Progeress'
import Nav from './components/Nav'
export default function App() {
  return (
    


    <LinearGradient 
    colors={['#7162e1',"#4530b3","#0d0f8f"]}
    start={{x:0.1,y:0.2}}
    end={{x:0.6,y:1}}

  
    >
    
  <View style={styles.container}>
      <View style={styles.profImgContainer}>
      <Image source={{
        uri:"https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"
      }} style={styles.profileImg}/>
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.userName}>Hi Pranjal</Text>
        <Text  style={styles.subText}>6 Tasks are pending</Text>
      </View>

     <WorkTemplate/>
     <View style={styles.makeFlex}>
      <Text style={styles.headText}>Monthly Review</Text>
      <Image source={{
        uri:"https://static.vecteezy.com/system/resources/previews/010/150/760/original/calendar-icon-sign-symbol-design-free-png.png"
      }} style={styles.calenderImg}></Image>
     </View>
<Progeress/>

<Nav/>
    </View>
    
    </LinearGradient>
    
  )
}
//
//#ffffff white color of text
//
//#5451d6  inner boxes
//#1ed1ff  sky blue
//
//

//#b9d6ed secondary text color
//
//

const styles = StyleSheet.create({
  container:{

     padding:18,
     minHeight:823.5,
     
     
     
   
  },
  profImgContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    
  },

  profileImg:{
    height:50,
    width:50,
    borderRadius:50,
    marginRight:0,
    borderColor:"white",
    borderWidth:2

  },
  nameContainer:{
  
    marginTop:50

  },
  subText:{
    color:"#b9d6ed",
    marginTop:0
  },
  userName:{
    fontSize:23,
    fontWeight:'700',
    color:"#ffffff"

  },
  makeFlex:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:12
  },
  headText:{
    color:"#ffffff",
    fontWeight:"600",
    fontSize:17
},
calenderImg:{
  height:35,
  width:35,

}

})