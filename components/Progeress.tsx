import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



export default function Progeress() {

function Card(props){

    return(
<View style={[{width:props.width,height:props.height},styles.Card , props.mysty ? styles[props.mysty] : null] } >
        <View style={styles.flexConatiner}>
            <Text style={styles.Count}>{props.count}</Text>
            <Text style={styles.subText}>{props.status}</Text>
        </View>
</View>
    )
}

  return (
    <View style={styles.parentContainer}>
    <Card height={150} width={150} count={22} status="Done"/>
    <Card height={110} width={180} count={7} status="In progress"/>
    <Card height={110} width={150} count={10} status="Ongoing"/>
    <Card height={150} width={190} count={12} mysty='cardPosition' status="Waiting for Review"/>
    </View>
  )
}

const styles = StyleSheet.create({
    parentContainer:{
    
       
        marginTop:16,
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between"
    },
    Card:{
        padding:23,
        borderRadius:16,
         display:"flex",
         alignItems:"center",
         justifyContent:"center",
         shadowColor:"#000008",
        elevation:4,
        backgroundColor:"#5c5ed6",
        marginBottom:12,
       
        

    
},
cardPosition:{

position:"absolute",
top:125,
left:168


},
Count:{
    fontSize:27,
    fontWeight:'700',
    color:"#ffffff"
},
flexConatiner:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
},
subText:{
    color:"#b9d6ed",
    fontSize:12

}


})