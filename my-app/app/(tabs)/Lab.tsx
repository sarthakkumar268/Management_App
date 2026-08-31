import {View,Text,ScrollView,Pressable} from 'react-native'

export default function Lab(){
  const p = true;
  const w = false;
  const s = false;

  const date =(new Date()).toLocaleDateString() 
  return(
    <>
      <ScrollView >
        <View style={{paddingLeft:30,paddingBottom:10,paddingTop:70}}>
          <Text style={{color:"white",fontSize:25,fontWeight:"bold"}}>Lab Work</Text>
        </View>
        <ScrollView style={{backgroundColor:"#1B1B1B",width:420,height:500,marginTop:20,borderRadius:10}}>
          <View style={{backgroundColor:"#555555",width:300,height:50,borderRadius:10,marginLeft:25,marginTop:10}}>
            <Text style={{fontSize:20,fontWeight:"bold",margin:"auto"}}>Microprocessor Lab</Text>
          </View>
          <Pressable style={{backgroundColor:"white",width:50,height:20,paddingLeft:5,borderRadius:7,marginLeft:15,marginTop:7}}>
              <Text>Add + </Text>
            </Pressable>
          <View>
            <View style={{flex:1,flexDirection:'row',marginTop:8}}>
            <View style={{backgroundColor:"black",width:270,height:50,marginLeft:2}}>
              <Text style={{color:"white",paddingLeft:10,paddingTop:5}}>Lab_week 2_assignment 01</Text>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:"space-around"}}>
              <Pressable style={{backgroundColor:"#B89F00",width:42,borderRadius:5}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Work</Text>
              </Pressable>
              <Pressable style={{backgroundColor:"#05A300",width:42,borderRadius:5}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Subt</Text>
              </Pressable>
            </View>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <Text style={{color:"white"}}>Created at - {date} </Text>
            <Text style={{color:"red"}}>Deadline - {date}</Text>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <View style={p?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#CA0000"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={p?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>P</Text>
            </View>
            <View style={w?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#B89F00"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={w?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>W</Text>
            </View>
            <View style={s?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#05A300"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={s?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>S</Text>
            </View>
          </View>
          <View style={{flex:1,flexDirection:'row',marginTop:8}}>
            <View style={{backgroundColor:"black",width:270,height:50,marginLeft:2}}>
              <Text style={{color:"white",paddingLeft:10,paddingTop:5}}>Lab_week 2_assignment 01</Text>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:"space-around"}}>
              <Pressable style={{backgroundColor:"#B89F00",width:42,borderRadius:5}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Work</Text>
              </Pressable>
              <Pressable style={{backgroundColor:"#05A300",width:42,borderRadius:5}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Subt</Text>
              </Pressable>
            </View>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <Text style={{color:"white"}}>Created at - {date} </Text>
            <Text style={{color:"red"}}>Deadline - {date}</Text>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <View style={p?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#CA0000"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={p?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>P</Text>
            </View>
            <View style={w?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#B89F00"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={w?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>W</Text>
            </View>
            <View style={s?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#05A300"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={s?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>S</Text>
            </View>
          </View>
          </View>
        </ScrollView>
            <ScrollView style={{backgroundColor:"#1B1B1B",width:420,height:500,marginTop:20,borderRadius:10}}>
          <View style={{backgroundColor:"#555555",width:300,height:50,borderRadius:10,marginLeft:25,marginTop:10}}>
            <Text style={{fontSize:20,fontWeight:"bold",margin:"auto"}}>DSA using c++</Text>
          </View>
          <View>
            <Pressable style={{backgroundColor:"white",width:50,height:20,paddingLeft:5,borderRadius:7,marginLeft:15,marginTop:7}}>
              <Text>Add + </Text>
            </Pressable>
            <View style={{flex:1,flexDirection:'row',marginTop:8}}>
            <View style={{backgroundColor:"black",width:270,height:50,marginLeft:2}}>
              <Text style={{color:"white",paddingLeft:10,paddingTop:5}}>Lab_week 2_assignment 01</Text>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:"space-around"}}>
              <Pressable style={{backgroundColor:"#B89F00",width:42,borderRadius:5}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Work</Text>
              </Pressable>
              <Pressable style={{backgroundColor:"#05A300",width:42,borderRadius:5}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Subt</Text>
              </Pressable>
            </View>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <Text style={{color:"white"}}>Created at - {date} </Text>
            <Text style={{color:"red"}}>Deadline - {date}</Text>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <View style={p?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#CA0000"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={p?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>P</Text>
            </View>
            <View style={w?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#B89F00"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={w?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>W</Text>
            </View>
            <View style={s?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#05A300"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={s?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>S</Text>
            </View>
          </View>
          <View style={{flex:1,flexDirection:'row',marginTop:8}}>
            <View style={{backgroundColor:"black",width:270,height:50,marginLeft:2}}>
              <Text style={{color:"white",paddingLeft:10,paddingTop:5}}>Lab_week 2_assignment 01</Text>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:"space-around"}}>
              <Pressable style={{backgroundColor:"#B89F00",width:53,borderRadius:5}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Working</Text>
              </Pressable>
              <Pressable style={{backgroundColor:"#05A300",width:47,borderRadius:5}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Submit</Text>
              </Pressable>
            </View>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <Text style={{color:"white"}}>Created at - {date} </Text>
            <Text style={{color:"red"}}>Deadline - {date}</Text>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <View style={p?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#CA0000"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={p?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>P</Text>
            </View>
            <View style={w?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#B89F00"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={w?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>W</Text>
            </View>
            <View style={s?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#05A300"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={s?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>S</Text>
            </View>
          </View>
          </View>
        </ScrollView>
            <ScrollView style={{backgroundColor:"#1B1B1B",width:420,height:500,marginTop:20,borderRadius:10}}>
          <View style={{backgroundColor:"#555555",width:300,height:50,borderRadius:10,marginLeft:25,marginTop:10}}>
            <Text style={{fontSize:20,fontWeight:"bold",margin:"auto"}}>Probability Lab</Text>
          </View>
          <View>
            <Pressable style={{backgroundColor:"white",width:50,height:20,paddingLeft:5,borderRadius:7,marginLeft:15,marginTop:7}}>
              <Text>Add + </Text>
            </Pressable>
            <View style={{flex:1,flexDirection:'row',marginTop:8}}>
            <View style={{backgroundColor:"black",width:270,height:50,marginLeft:2}}>
              <Text style={{color:"white",paddingLeft:10,paddingTop:5}}>Lab_week 2_assignment 01</Text>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:"space-around"}}>
              <Pressable style={{backgroundColor:"#B89F00",width:42,borderRadius:5}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Work</Text>
              </Pressable>
              <Pressable style={{backgroundColor:"#05A300",width:42,borderRadius:5}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Subt</Text>
              </Pressable>
            </View>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <Text style={{color:"white"}}>Created at - {date} </Text>
            <Text style={{color:"red"}}>Deadline - {date}</Text>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <View style={p?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#CA0000"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={p?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>P</Text>
            </View>
            <View style={w?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#B89F00"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={w?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>W</Text>
            </View>
            <View style={s?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#05A300"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={s?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>S</Text>
            </View>
          </View>
          <View style={{flex:1,flexDirection:'row',marginTop:8}}>
            <View style={{backgroundColor:"black",width:270,height:50,marginLeft:2}}>
              <Text style={{color:"white",paddingLeft:10,paddingTop:5}}>Lab_week 2_assignment 01</Text>
            </View>
            <View style={{flex:1,flexDirection:'row',justifyContent:"space-around"}}>
              <Pressable style={{backgroundColor:"#B89F00",width:42,borderRadius:5}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Work</Text>
              </Pressable>
              <Pressable style={{backgroundColor:"#05A300",width:42,borderRadius:5}}>
                <Text style={{margin:"auto",fontWeight:"bold"}}>Subt</Text>
              </Pressable>
            </View>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <Text style={{color:"white"}}>Created at - {date} </Text>
            <Text style={{color:"red"}}>Deadline - {date}</Text>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:"space-around"}}>
            <View style={p?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#CA0000"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={p?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>P</Text>
            </View>
            <View style={w?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#B89F00"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={w?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>W</Text>
            </View>
            <View style={s?{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30,backgroundColor:"#05A300"}:{borderColor:"white",borderWidth:1,borderRadius:100,width:30,height:30}}>
              <Text style={s?{color:"black",fontWeight:"medium",margin:"auto"}:{color:"white",fontWeight:"medium",margin:"auto"}}>S</Text>
            </View>
          </View>
          </View>
        </ScrollView>
      </ScrollView>
    </>
  )
}