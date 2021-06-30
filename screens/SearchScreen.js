import React from 'react';
import { Text, View } from 'react-native';

export default class SearchScreen extends React.Component{

 render(){
     return(

     <View style={{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
         backgroundColor:'black',
     }}>
      
      <Text style={{
       color:'white',
       fontSize:25,
       fontStyle:'italic',
      }}> 
      Search

       </Text>

     </View>

     )
 }

}








