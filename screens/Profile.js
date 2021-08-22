import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import Avatar from "../assets/avatar.jpg";

export default function Profile({navigation}) {
    navigation.setOptions({ headerStyle: { display: "none", height: 0} });
    return (
        <View>
            <ImageBackground
                source={{
                    uri: "https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-c%C3%A1c-h%C3%ACnh-%E1%BA%A3nh-background-%C4%91%E1%BA%B9p-nh%E1%BA%A5t-21.jpg",
                }}
                style={styles.header}>
                <View
                    style={{
                        shadowColor: "#000",
                        shadowOpacity: 0.3,
                        shadowRadius: 10,
                        shadowOffset: { width: 0, height: 0 },
                    }}>
                    <Image source={Avatar} style={styles.image} />
                </View>
                <Text style={styles.name}>Duy Anh</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        paddingBottom: 20,
        paddingTop: 50
    },
    image: {
        height: 150,
        width: 150,
        marginTop: 20,
        borderRadius: 100,
        borderColor: "#fff",
        borderWidth: 5,
    },
    name: {
        fontWeight: "bold",
        marginTop: 16,
        fontSize: 25,
        color: "#fff"
    },
});
