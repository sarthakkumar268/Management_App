import {View,Text,ScrollView,Pressable} from 'react-native'

export default function Lab(){
  return(
    <>
      <ScrollView >
        <View style={{paddingLeft:30,paddingBottom:10,paddingTop:70,borderWidth:1,borderColor:"white"}}>
          <Text style={{color:"white",fontSize:25,fontWeight:"bold"}}>Lab Work</Text>
        </View>
        <ScrollView style={{backgroundColor:"#1B1B1B",width:420,height:400,marginTop:20,borderRadius:10}}>
          <View style={{backgroundColor:"#555555",width:300,height:50,borderRadius:10,marginLeft:25,marginTop:10}}>
            <Text style={{fontSize:20,fontWeight:"bold",margin:"auto"}}>Microprocessor Lab</Text>
          </View>
          <View style={{borderWidth:1,borderColor:"white",flex:1,flexDirection:'row',marginTop:8}}>
            <View style={{backgroundColor:"black",width:270,height:50,marginLeft:2}}></View>
            <View style={{flex:1,flexDirection:'row',justifyContent:"space-around"}}>
              <Pressable style={{backgroundColor:"#CA0000",width:42,borderRadius:5,padding:3}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Pend</Text>
              </Pressable>
              <Pressable style={{backgroundColor:"#B89F00",width:42,borderRadius:5}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Work</Text>
              </Pressable>
              <Pressable style={{backgroundColor:"#05A300",width:42,borderRadius:5}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Subt</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
    </>
  )
}