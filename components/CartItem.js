import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
} from "react-native";

import { useDispatch } from "react-redux";
import { updateCart } from "../redux/actions/cart.action";

export default function CartItem(props) {
    const dispatch = useDispatch();

    const handleIncrease = (product, count) => {
        dispatch(updateCart(product, count))
    }

    const handleDecrease = (product, count) => {
        dispatch(updateCart(product, count))
    }
    return (
        <TouchableOpacity activeOpacity={1} onPress={props.onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: props.image }} />
                <Text style={styles.title}>{props.name}</Text>
                <View style={styles.count}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => handleDecrease(props.item, -1)}>
                        <Text style={styles.adjust}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.titleCount}>{props.count}</Text>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => handleDecrease(props.item, 1)}>
                        <Text style={styles.adjust}>+</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.price}>
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
        flexDirection: "row",
    },
    image: {
        width: 100,
        height: 100,
    },
    title: {
        marginTop: 10,
        textTransform: "capitalize",
        fontWeight: "bold",
        flexGrow: 1,
        textAlign: "center",
        width: 80,
        flexGrow: 1,
    },
    titleCount: {
        marginTop: 10,
        textTransform: "capitalize",
        fontWeight: "bold",
        flexGrow: 1,
        textAlign: "center",
        marginHorizontal: 10,
        flexGrow: 1,
    },
    price: {
        marginTop: 10,
        textTransform: "capitalize",
        fontWeight: "bold",
        textAlign: "right",
        flexGrow: 1,
        width: 70,
    },
    count: {
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    adjust: {
        marginTop: 10,
        textTransform: "capitalize",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#f1f1f1",
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
});
