import React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { GoogleSignin, User } from "@react-native-google-signin/google-signin";
import { handleLogin } from "../../../API/Google";
import { RootState } from "../../../redux/store";
import { login } from "../../../redux/slices/authSlice";
import style from "./style";
import { useDispatch, useSelector } from "react-redux";


const AuthScreen = ({navigation}: any) => {
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch();
    const handle = async () => {
        const userInfo = await handleLogin();
        if (userInfo && userInfo.data?.user) {
            console.log(userInfo.data.user);
            dispatch(login(userInfo.data?.user));
            navigation.replace("Home")
        }
    }
    return(
        <SafeAreaView style={{flex: 1, justifyContent: "center", alignSelf: 'center'}}>
            <Text style={style.textcenter}>Welcome!</Text>
            <Text style={style.textcenter}>WE ShareData</Text>
            <Text style={style.textcenter}>Sign In To continue</Text>
            <TouchableOpacity onPress={handle}  style={{flexDirection: "row", margin: 40}}>
                <Image style = {{width: 50, height: 50}} source={require("../../../assets/logos/google.png")}/>
                <Text style={[style.textcenter, {marginLeft: 5}]}>Sign in with Google</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default AuthScreen;