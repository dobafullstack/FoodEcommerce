import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";

export default function CategoryItem(props) {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: props.image }} />
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.title}>
                    {props.price.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                    })}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // borderColor: "#000",
        // borderWidth: 1,
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 8,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
    },
    image: {
        width: 100,
        height: 100,
    },
    title: {
        marginTop: 10,
        textTransform: "capitalize",
        fontWeight: "bold",
    },
});
