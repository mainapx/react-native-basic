import {React,useState} from 'react';
import {View,Text,ActivityIndicator,Dimensions} from 'react-native';
import Header from './header';
import { StyleSheet } from 'react-native';

const NotificationScreen=({navigation})=>{
    const NotificationStyle=StyleSheet.create({
        bodyStyle:{
            flex:1,
            alignItems:'center'
        },
        SpinnerStyle:{
            flex:1,
            alignItems:'center',
            paddingTop:Dimensions.get("window").height/2,
            paddingBottom:Dimensions.get("window").height/2
        }
    })
    const [getresult]=useState("arrow-left")
    const [getSpinner,setSpinner]=useState(<ActivityIndicator style={NotificationStyle.SpinnerStyle} size={"large"}/>)
    return(
        <View>
            <Header

                buttontype={getresult}
                titlename={"Notifications"}
                clickcontent={"HomeScreen"}
                navigations={navigation}

            />
            {/* Notification Body */}
            <View style={NotificationStyle.bodyStyle}>
                {getSpinner}
            </View>
        </View>

    )
}
export default NotificationScreen;