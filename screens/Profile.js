import React from "react";
import {
    StyleSheet,
    View,
} from "react-native";
import { useSelector } from "react-redux";

import ProfileComponent from "../components/Profile";
import LoginComponent from "../components/Login";

export default function Profile({ navigation }) {
    const auth = useSelector((state) => state.auth);
    console.log(auth.isLogin)
    auth.isLogin
        ? navigation.setOptions({
              headerStyle: { display: "none", height: 0 },
              title: "Profile",
          })
        : navigation.setOptions({
              headerStyle: { display: "none", height: 0 },
              title: "Login",
          });
    return (
        <View>{auth.isLogin ? <ProfileComponent /> : <LoginComponent />}</View>
    );
}

const styles = StyleSheet.create({});
