import {React,useState} from 'react';
import {View,Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from './header';

const AboutScreen=({navigation})=>{
    const [getresult]=useState("arrow-left")
    return(
        <View>
            <Header

                buttontype={getresult}
                titlename={"About"}
                clickcontent={"Home"}
                navigations={navigation}

            />
        </View>

    )
}
export default AboutScreen;