import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/auth.action";

export default function Home() {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    if (auth.isLogin) {
        axios
            .post("/auth/verifyToken", {
                token: auth.accessToken,
            })
            .catch((err) => {
                Alert.alert("Phiên đăng nhập hết hạn");
                dispatch(logout());
            });
    }

    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
