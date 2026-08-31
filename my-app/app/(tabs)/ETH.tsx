import {View,Text,ScrollView,Pressable} from 'react-native'

export default function ETH(){
  return(
    <>

      <View>
        <Text style={{paddingLeft:30,paddingBottom:10,paddingTop:70,color:"white",fontSize:25,fontWeight:"bold"}}>ETH Zurich</Text>
      </View>
      <ScrollView>
      <ScrollView style={{backgroundColor:"#191919",height:450,borderRadius:6,width:415,margin:"auto"}}>
      <View style={{backgroundColor:"#5F5F5F",width:250,height:50,borderRadius:10,marginLeft:10,marginTop:10}}>
        <Text style={{fontSize:22,fontWeight:"medium",padding:10}}>Probability</Text>
      </View>
      <Pressable style={{backgroundColor:"white",width:70,padding:5,borderRadius:6,marginLeft:20,marginTop:5}}>
        <Text style={{margin:"auto"}}>Add + </Text>
      </Pressable>
        <View style={{width:390,margin:"auto",marginTop:10,flex:1,flexDirection:"row"}}>
          <View style={{paddingLeft:10,paddingTop:4,width:270,height:50,backgroundColor:"#272727",borderRadius:7}}>
            <Text style={{color:"white"}}>Probability lecture 1 montyhall</Text>
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
      </ScrollView>


    </>
  )
}