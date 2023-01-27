import React,{useState} from 'react';
import mainStyle from './style';
import { FontAwesome } from '@expo/vector-icons';
import {Text,View,TextInput,Button,StyleSheet,Dimensions, Touchable, TouchableOpacity} from 'react-native';

const LoginScreen=({navigation})=>{
    const [getLoginState,setLoginState]=useState({username:'',password:''})
    const ForgotButton=()=>{
        return(
            <TouchableOpacity
                
                onPress={()=>navigation.navigate("Forgot")}
            >
                <Text style={mainStyle.Linking}>Forgot Password?</Text>    
            </TouchableOpacity>
        )
    }
    return(
        <View style={mainStyle.loginMainContainer}>
            <View style={mainStyle.loginContainer}>
                <Text style={mainStyle.headingStyle}>Sign in</Text>
                <View>
                    <TextInput
                        style={mainStyle.inputStyle}
                        editable
                        maxLength={40}
                        placeholder="example@mail.com"
                        onChangeText={(e)=>setLoginState(previous=>({...previous,username:e}))}
                    />

                    <TextInput
                        editable
                        placeholder="Password"
                        style={mainStyle.inputStyle}
                        maxLength={40}
                        onChangeText={(e)=>setLoginState(previousx=>({...previousx,password:e}))}
                    />
                    <FontAwesome.Button
                        name="lock"
                        style={mainStyle.loginButton}

                    >Login</FontAwesome.Button>
                    <ForgotButton />

                </View>
            </View>
        </View>
    )
}
export default LoginScreen;