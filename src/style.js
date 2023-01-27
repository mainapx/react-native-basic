import React from 'react';
import { StyleSheet,Dimensions } from 'react-native';

const mainStyle=StyleSheet.create({
    loginButton:{
        backgroundColor:'blue',
        display:'flex',
        justifyContent:'center'
    },
    containerStyle:{
        marginLeft:20,
        marginRight:20,
        margin:'0 auto'
    },
    loginContainer:{
        shadowColor:'grey',
        shadowRadius:3,
        textAlign:'center',
        padding:20,
        shadowOpacity:1,
        
    },
    headingStyle:{
        fontSize:25,
        paddingBottom:28,
        color:'white',
        fontWeight:'bold'
    },
    loginMainContainer:{
        margin:20,
        display:'flex',
        justifyContent:'center',
        height:Dimensions.get("window").height
    },
    inputStyle:{
        padding:10,
        marginTop:15,
        marginBottom:15,
        color:'white',
        fontSize:'18px',
        border:'2px solid white',
        borderWidth:1.0
        
    },
    Linking:{
        color:'blue',
        display:'flex',
        justifyContent:'center',
        marginTop:15,
        marginBottom:15
    },
    registerContainer:{
        shadowColor:'grey',
        shadowRadius:4,
        textAlign:'center',
        padding:20,
        border:'2px solid white',
        marginTop:50,
        marginBottom:50,
        shadowOpacity:1
    },
    registerButton:{
        backgroundColor:'red',
        display:'flex',
        justifyContent:'center'
    },
    dateInput:{
        marginTop:15,
        marginBottom:15
    }
    
})

export default mainStyle;