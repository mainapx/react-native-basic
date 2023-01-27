import {View,Text,Dimensions,Image,StyleSheet,Alert,Linking,BackHandler} from 'react-native';
import React,{Button,useState} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { FontAwesome } from '@expo/vector-icons';
import {createAppContainer} from 'react-navigation';
import Sidebar from './sidebar';

const Header=({buttontype,sidebar,titlename,bellnotification,navigations,clickcontent})=>{
    const [getWidth]=useState(Dimensions.get('window').width)
    const [getRender,setRender]=useState(null)
    const [getHeight]=useState(Dimensions.get('window').height);
    const [getDisplay,setDisplay]=useState(0)



    return(
        <View style={{justifyContent:'space-between',backgroundColor:'blue',width:getWidth,height:60,flexDirection:'row',marginTop:30,padding:10}}>
                        
            {sidebar}
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <FontAwesome.Button
                        name={buttontype}
                        accessibilityLable="barshandler"
                        backgroundColor="transparent"
                        onPress={()=>buttontype == "arrow-left"? navigations.navigate("Home"): clickcontent()  }
                >

                </FontAwesome.Button>
                <Text style={{color:'white',fontSize:20}}>{titlename}</Text>
            </View>

            {bellnotification}
        </View>
    )
}
export default Header;