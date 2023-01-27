import React,{useState} from 'react';
import DatePicker from 'react-native-datepicker';
import {View,Text,TextInput,TouchableOpacity,StyleSheet, ImageBackground} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import mainStyle from './style';

const RegistrationScreen=()=>{

    const [isShow,setShow]=useState(false)
    const [imageURL]=useState("https://wallpaperaccess.com/full/1163661.jpg")
    const [getDate,setDate]=useState(`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`)
    return(
        <ImageBackground source={{uri:imageURL}} resizeMode="cover" style={{flex:1,justifyContent:'center'}}>
            <View style={mainStyle.containerStyle}>
                <View style={mainStyle.registerContainer}>            
                    <View>
                        <Text style={mainStyle.headingStyle}>Registration</Text>
                    </View>

                    <View>
                        <TextInput
                            style={mainStyle.inputStyle}
                            placeholder='Firstname'
                            editable
                            maxLength={40}
                        />

                        <TextInput
                            style={mainStyle.inputStyle}
                            placeholder='Email ID'
                            editable
                            maxLength={40}
                        />
                        <TextInput
                            style={mainStyle.inputStyle}
                            placeholder='Create Password'
                            editable
                            secureTextEntry={true}
                            maxLength={40}
                        />
                        
                        <TextInput
                            style={mainStyle.inputStyle}
                            placeholder='Confirm Password'
                            editable
                            secureTextEntry={true}
                            maxLength={40}
                        />



                        <View style={mainStyle.dateInput}>
                            <DatePicker
                                date={new Date()}
                                mode="date"
                                placeholder="Select Date of birth"
                                format="YYYY-MM-DD"
                                minDate="1980-01-01"
                                maxDate={getDate}
                                confirmBtnText={"OK"}
                                cancelBtnText={"Cancel"}
                                onDateChange={(date)=>setDate(date)}
                                onCancel={()=>setShow(false)}
                                customStyles={{
                                    dateInput:mainStyle.dateInputStyle
                                }}
                            />
                        </View>
                        
                        <FontAwesome.Button
                            style={mainStyle.registerButton}

                        >Create Account</FontAwesome.Button>
                    </View>
                </View>
            </View>
        </ImageBackground>

    )
}
export default RegistrationScreen;