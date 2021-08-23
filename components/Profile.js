import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
} from "react-native";
import Avatar from "../assets/avatar.jpg";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Profile() {
    return (
        <View style={{ height: "100%", position: "relative" }}>
            <View style={styles.header}></View>
            <View style={styles.body}>
                <View
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        alignItems: "center",
                    }}>
                    <Image source={Avatar} style={styles.avatar} />
                    <View style={styles.nameWrapper}>
                        <TouchableOpacity style={styles.btn}>
                            <Ionicons
                                name='settings-outline'
                                size={25}
                                color='rgba(0, 0, 0, 0.7)'
                            />
                        </TouchableOpacity>
                        <Text style={styles.name}>Duy Anh</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Ionicons
                                name='log-out-outline'
                                size={25}
                                color='rgba(0, 0, 0, 0.7)'
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hr}></View>
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemText}>Profile</Text>
                        <Ionicons
                            name='chevron-forward-outline'
                            size={25}
                            color='#000'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemText}>WishList</Text>
                        <Ionicons
                            name='chevron-forward-outline'
                            size={25}
                            color='#000'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemText}>Order History</Text>
                        <Ionicons
                            name='chevron-forward-outline'
                            size={25}
                            color='#000'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item}>
                        <Text style={styles.itemText}>Privacy Policy</Text>
                        <Ionicons
                            name='chevron-forward-outline'
                            size={25}
                            color='#000'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "40%",
        backgroundColor: "#f4511e",
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
    },
    body: {
        zIndex: 111,
        width: "90%",
        height: "70%",
        backgroundColor: "#FFF",
        position: "absolute",
        bottom: 0,
        left: "5%",
        right: "5%",
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "#FFF",
        position: "absolute",
        top: -80,
        left: 100,
    },
    nameWrapper: {
        marginTop: 80,
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    name: {
        fontSize: 20,
    },
    hr: {
        width: "100%",
        height: 1,
        borderBottomWidth: 0.5,
        borderColor: "#121212",
        opacity: 0.1,
        marginTop: 16,
    },
    btn: {
        backgroundColor: "rgb(248, 248, 248)",
        padding: 8,
        borderRadius: 50,
    },
    item: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        marginTop: 8,
    },
    itemText: {
        fontSize: 18,
    },
});
