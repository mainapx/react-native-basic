import {React,useRef,useState} from 'react';
import {View,Text,TouchableHighlight,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from './header';
import Sidebar from './sidebar';

const HomeScreen=({navigation})=>{
    const [getSidebarWidth,setSidebarWidth]=useState(0)
    const containerRef=useRef()

    function ShowBars(){
        if(getSidebarWidth == 0){
            setSidebarWidth(Dimensions.get('window').width/2)
        }else{
            setSidebarWidth(0)
        }
    }
    const FadeSideBar=(e)=>{
        (async()=>{await setSidebarWidth(0)})().then(navigation.navigate(e))
    }

    return(
        <TouchableHighlight onPress={()=>getSidebarWidth != 0 ? setSidebarWidth(0) : false}>
            <View>
                <Header
                    sidebar={
                            <Sidebar
                                getMargins={0}
                                sidebarWidth={getSidebarWidth}
                                navigation={navigation}
                                setSidebarSize={setSidebarWidth}
                                FadeSideBar={FadeSideBar}
                                
                            />
                    }
                    clickcontent={ShowBars}

                    bellnotification={

                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <FontAwesome.Button
                                name="bell"
                                onPress={()=>FadeSideBar("Notifications")}
                                accessibilityLable="Notifications"
                                backgroundColor="transparent"
            
                            >
                            
                            </FontAwesome.Button>
                            <FontAwesome.Button 
                                name="cog"
                                backgroundColor="transparent"
                                accessibilityLable="Settings"
                            >
                                
                            </FontAwesome.Button>
                        </View>
                    }
                    buttontype={"bars"}
                    titlename={"Home"}
                    navigation={navigation}
                />
            </View>
        </TouchableHighlight>

    )
}
export default HomeScreen;