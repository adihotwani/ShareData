import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { View, Text } from "react-native";

const SplashScreen = ({navigation}: any) => {
    useEffect(()=>{
        checkLogin();
    },[])

    const checkLogin = async () => {
        const token = await AsyncStorage.getItem('accessToken')
        if(token){
            navigation.replace("Home");
        }
    }
    return(
        <View style={{justifyContent: 'center', alignSelf: "center"}}>
            <Text>Welcome to Cyderes</Text>
        </View>
    )
}
export default SplashScreen;