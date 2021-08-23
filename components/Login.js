import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button,
    Image
} from "react-native";

import Facebook from '../assets/facebook.png';
import Google from '../assets/google.png';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.textLogin}>Login</Text>

                <TextInput style={styles.input} placeholder='Username' />
                <TextInput style={styles.input} placeholder='Password' />
                <TouchableOpacity style={styles.btnLogin} activeOpacity={0.8}>
                    <Text
                        style={{
                            color: "white",
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: 12,
                        }}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style={styles.signUpWrapper}>
                    <Text style={{ marginHorizontal: 16 }}>
                        Don't have an account?
                    </Text>
                    <Button title='SignUp' />
                </View>
                <View style={styles.socialWrapper}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image source={Facebook} style={styles.socialIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Image source={Google} style={styles.socialIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#f4511e",
        height: "100%",
        position: "relative",
    },
    input: {
        height: 40,
        width: "70%",
        borderBottomWidth: 0.5,
        paddingHorizontal: 20,
        borderColor: "rgba(18, 18, 18, 0.3)",
        borderRadius: 10,
        color: "#121212",
        marginVertical: 16,
        fontSize: 16,
    },
    wrapper: {
        height: "60%",
        width: "100%",
        backgroundColor: "#FFF",
        zIndex: 11,
        position: "absolute",
        bottom: 0,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        alignItems: "center",
    },
    textLogin: {
        marginTop: 16,
        marginLeft: 16,
        fontSize: 25,
        textTransform: "uppercase",
    },
    btnLogin: {
        backgroundColor: "#f4511e",
        width: "40%",
        paddingVertical: 16,
        marginTop: 16,
        borderRadius: 50,
    },
    signUpWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
    },
    socialWrapper: {
        flexDirection: "row",
        marginTop: 30,
        width: "40%",
        justifyContent: "space-between"
    },
    socialIcon: {
        width: 50,
        height: 50,
        borderRadius: 50
    }
});