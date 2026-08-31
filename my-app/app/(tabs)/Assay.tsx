import {View,Text,ScrollView, Pressable} from 'react-native'

export default function Assay(){
  return(
    <>
      <View>
        <Text style={{paddingLeft:30,paddingBottom:10,paddingTop:70,color:"white",fontSize:25,fontWeight:"bold"}}>Assay web Project</Text>
        <Text style={{color:"#1D9E75",paddingLeft:20,fontSize:20}}>55% complete</Text>
      </View>
      <View style={{backgroundColor:"#5F5F5F",width:280,height:50,borderRadius:10,marginLeft:10,marginTop:10}}>
        <Text style={{fontSize:22,fontWeight:"medium",padding:10}}>Feature to work on</Text>
      </View>
      <Pressable style={{backgroundColor:"white",width:70,padding:5,borderRadius:6,marginLeft:20,marginTop:5}}>
        <Text style={{margin:"auto"}}>Add + </Text>
      </Pressable>
      <ScrollView>
        <View style={{width:390,margin:"auto",marginTop:10,flex:1,flexDirection:"row"}}>
          <View style={{paddingLeft:10,paddingTop:4,width:270,height:50,backgroundColor:"#272727",borderRadius:7}}>
            <Text style={{color:"white"}}>Website product - 2 Games, 1 Ebook</Text>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"space-around",margin:"auto"}}>
            <Pressable style={{backgroundColor:"#505050",width:50,height:35,borderRadius:6}}>
              <Text style={{fontWeight:"bold",margin:"auto"}}>Cancel</Text>
            </Pressable>
            <Pressable style={{backgroundColor:"#1D9E75",width:50,height:35,borderRadius:6}}>
              <Text style={{fontWeight:"bold",margin:"auto"}}>Done</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  )
}