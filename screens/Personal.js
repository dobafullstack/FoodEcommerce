import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";

import PersonalComponent from "../components/Personal";
import LoginComponent from "../components/Login";

export default function Personal({ navigation, route }) {
    const auth = useSelector((state) => state.auth);
    return (
        <View>
            {auth.isLogin ? (
                <PersonalComponent navigation={navigation} />
            ) : (
                <LoginComponent navigation={navigation} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({});
