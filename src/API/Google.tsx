import React from "react";
import { GoogleSignin, SignInResponse, statusCodes, User } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";
import auth  from "@react-native-firebase/auth";
import { Alert } from "react-native";

export const handleLogin = async () => {
    try {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const userInfo: SignInResponse = await GoogleSignin.signIn();
        const token = (await GoogleSignin.getTokens()).accessToken;
        // const { idToken } = await GoogleSignin.signIn();
        // const googleCreds = auth.GoogleAuthProvider.credential(idToken);
        // const userCreds = await auth().signInWithCredential(googleCreds);
        await AsyncStorage.setItem('accessToken', token);
        return userInfo;
    } catch (error: any){
        console.log(error)
        Alert.alert('Login Error', error.message);
    }
};