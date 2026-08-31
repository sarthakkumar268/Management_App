import {View,Text,ScrollView, Pressable} from 'react-native'

export default function Schedule(){
  return(
    <>
      <ScrollView>
        <View>
          <Text style={{paddingLeft:30,paddingBottom:10,paddingTop:70,color:"white",fontSize:25,fontWeight:"bold"}}>Daily Schedule</Text>
        </View>
        <View style={{padding:15}}>
          <Text style={{color:"white",fontSize:20,fontWeight:"bold",textAlign:"center"}}>Monday</Text>
          <ScrollView style={{backgroundColor:"#242424",width:400,height:500,borderRadius:15}}>
            <Text style={{color:"gray",textAlign:"center",paddingTop:7,fontSize:17}}>Classes & work</Text>
            <View style={{backgroundColor:"black",width:385,height:65,margin:"auto",borderRadius:10,flex:1,flexDirection:'row'}}>
             <View style={{padding:10,width:260}}>
               <Text style={{color:"white",fontSize:12,fontWeight:"medium"}}>DBMS (PCC-010) Lecture
                                                        08:20AM - 09-20AM</Text>
             </View>
             <View style={{width:120,flex:1,flexDirection:"row",justifyContent:"space-around",margin:"auto"}}>
                <Pressable style={{backgroundColor:"red",width:50,height:40,borderRadius:8}}>
                  <Text style={{fontSize:20,margin:"auto"}}>Skip</Text>
                </Pressable>
                <Pressable style={{backgroundColor:"#169000",width:50,height:40,borderRadius:8}}>
                  <Text style={{fontSize:20,margin:"auto"}}>Done</Text>
                </Pressable>                
             </View>
            </View>
          </ScrollView>
        </View>
        <View style={{padding:15}}>
          <Text style={{color:"white",fontSize:20,fontWeight:"bold",textAlign:"center"}}>Tuesday</Text>
          <ScrollView style={{backgroundColor:"#242424",width:400,height:500,borderRadius:15}}>
            <Text style={{color:"gray",textAlign:"center",paddingTop:7,fontSize:17}}>Classes & work</Text>
            <View style={{backgroundColor:"black",width:385,height:65,margin:"auto",borderRadius:10,flex:1,flexDirection:'row'}}>
             <View style={{padding:10,width:260}}>
               <Text style={{color:"white",fontSize:12,fontWeight:"medium"}}>DBMS (PCC-010) Lecture
                                                        08:20AM - 09-20AM</Text>
             </View>
             <View style={{width:120,flex:1,flexDirection:"row",justifyContent:"space-around",margin:"auto"}}>
                <Pressable style={{backgroundColor:"red",width:50,height:40,borderRadius:8}}>
                  <Text style={{fontSize:20,margin:"auto"}}>Skip</Text>
                </Pressable>
                <Pressable style={{backgroundColor:"#169000",width:50,height:40,borderRadius:8}}>
                  <Text style={{fontSize:20,margin:"auto"}}>Done</Text>
                </Pressable>                
             </View>
            </View>
          </ScrollView>
        </View>
        <View style={{padding:15}}>
          <Text style={{color:"white",fontSize:20,fontWeight:"bold",textAlign:"center"}}>Wednesday</Text>
          <ScrollView style={{backgroundColor:"#242424",width:400,height:500,borderRadius:15}}>
            <Text style={{color:"gray",textAlign:"center",paddingTop:7,fontSize:17}}>Classes & work</Text>
            <View style={{backgroundColor:"black",width:385,height:65,margin:"auto",borderRadius:10,flex:1,flexDirection:'row'}}>
             <View style={{padding:10,width:260}}>
               <Text style={{color:"white",fontSize:12,fontWeight:"medium"}}>DBMS (PCC-010) Lecture
                                                        08:20AM - 09-20AM</Text>
             </View>
             <View style={{width:120,flex:1,flexDirection:"row",justifyContent:"space-around",margin:"auto"}}>
                <Pressable style={{backgroundColor:"red",width:50,height:40,borderRadius:8}}>
                  <Text style={{fontSize:20,margin:"auto"}}>Skip</Text>
                </Pressable>
                <Pressable style={{backgroundColor:"#169000",width:50,height:40,borderRadius:8}}>
                  <Text style={{fontSize:20,margin:"auto"}}>Done</Text>
                </Pressable>                
             </View>
            </View>
          </ScrollView>
        </View>
        <View style={{padding:15}}>
          <Text style={{color:"white",fontSize:20,fontWeight:"bold",textAlign:"center"}}>Thursday</Text>
          <ScrollView style={{backgroundColor:"#242424",width:400,height:500,borderRadius:15}}>
            <Text style={{color:"gray",textAlign:"center",paddingTop:7,fontSize:17}}>Classes & work</Text>
            <View style={{backgroundColor:"black",width:385,height:65,margin:"auto",borderRadius:10,flex:1,flexDirection:'row'}}>
             <View style={{padding:10,width:260}}>
               <Text style={{color:"white",fontSize:12,fontWeight:"medium"}}>DBMS (PCC-010) Lecture
                                                        08:20AM - 09-20AM</Text>
             </View>
             <View style={{width:120,flex:1,flexDirection:"row",justifyContent:"space-around",margin:"auto"}}>
                <Pressable style={{backgroundColor:"red",width:50,height:40,borderRadius:8}}>
                  <Text style={{fontSize:20,margin:"auto"}}>Skip</Text>
                </Pressable>
                <Pressable style={{backgroundColor:"#169000",width:50,height:40,borderRadius:8}}>
                  <Text style={{fontSize:20,margin:"auto"}}>Done</Text>
                </Pressable>                
             </View>
            </View>
          </ScrollView>
        </View>
        <View style={{padding:15}}>
          <Text style={{color:"white",fontSize:20,fontWeight:"bold",textAlign:"center"}}>Friday</Text>
          <ScrollView style={{backgroundColor:"#242424",width:400,height:500,borderRadius:15}}>
            <Text style={{color:"gray",textAlign:"center",paddingTop:7,fontSize:17}}>Classes & work</Text>
            <View style={{backgroundColor:"black",width:385,height:65,margin:"auto",borderRadius:10,flex:1,flexDirection:'row'}}>
             <View style={{padding:10,width:260}}>
               <Text style={{color:"white",fontSize:12,fontWeight:"medium"}}>DBMS (PCC-010) Lecture
                                                        08:20AM - 09-20AM</Text>
             </View>
             <View style={{width:120,flex:1,flexDirection:"row",justifyContent:"space-around",margin:"auto"}}>
                <Pressable style={{backgroundColor:"red",width:50,height:40,borderRadius:8}}>
                  <Text style={{fontSize:20,margin:"auto"}}>Skip</Text>
                </Pressable>
                <Pressable style={{backgroundColor:"#169000",width:50,height:40,borderRadius:8}}>
                  <Text style={{fontSize:20,margin:"auto"}}>Done</Text>
                </Pressable>                
             </View>
            </View>
          </ScrollView>
        </View>
        <View style={{padding:15}}>
          <Text style={{color:"white",fontSize:20,fontWeight:"bold",textAlign:"center"}}>Saturday</Text>
          <ScrollView style={{backgroundColor:"#242424",width:400,height:500,borderRadius:15}}>
            <Text style={{color:"gray",textAlign:"center",paddingTop:7,fontSize:17}}>Classes & work</Text>
            <View style={{backgroundColor:"black",width:385,height:65,margin:"auto",borderRadius:10,flex:1,flexDirection:'row'}}>
             <View style={{padding:10,width:260}}>
               <Text style={{color:"white",fontSize:12,fontWeight:"medium"}}>DBMS (PCC-010) Lecture
                                                        08:20AM - 09-20AM</Text>
             </View>
             <View style={{width:120,flex:1,flexDirection:"row",justifyContent:"space-around",margin:"auto"}}>
                <Pressable style={{backgroundColor:"red",width:50,height:40,borderRadius:8}}>
                  <Text style={{fontSize:20,margin:"auto"}}>Skip</Text>
                </Pressable>
                <Pressable style={{backgroundColor:"#169000",width:50,height:40,borderRadius:8}}>
                  <Text style={{fontSize:20,margin:"auto"}}>Done</Text>
                </Pressable>                
             </View>
            </View>
          </ScrollView>
        </View>
        <View style={{padding:15}}>
          <Text style={{color:"white",fontSize:20,fontWeight:"bold",textAlign:"center"}}>Sunday</Text>
          <ScrollView style={{backgroundColor:"#242424",width:400,height:500,borderRadius:15}}>
            <Text style={{color:"gray",textAlign:"center",paddingTop:7,fontSize:17}}>Classes & work</Text>
            <View style={{backgroundColor:"black",width:385,height:65,margin:"auto",borderRadius:10,flex:1,flexDirection:'row'}}>
             <View style={{padding:10,width:260}}>
               <Text style={{color:"white",fontSize:12,fontWeight:"medium"}}>DBMS (PCC-010) Lecture
                                                        08:20AM - 09-20AM</Text>
             </View>
             <View style={{width:120,flex:1,flexDirection:"row",justifyContent:"space-around",margin:"auto"}}>
                <Pressable style={{backgroundColor:"red",width:50,height:40,borderRadius:8}}>
                  <Text style={{fontSize:20,margin:"auto"}}>Skip</Text>
                </Pressable>
                <Pressable style={{backgroundColor:"#169000",width:50,height:40,borderRadius:8}}>
                  <Text style={{fontSize:20,margin:"auto"}}>Done</Text>
                </Pressable>                
             </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  )
}