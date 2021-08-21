import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cart.action";

export default function Food({ route }) {
    const { food } = route.params;
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: food.image }} />
            <Text style={styles.text}>{food.name}</Text>
            <Text style={styles.description}>{food.description}</Text>
            <View style={styles.addToCart}>
                <Text style={styles.price}>
                    {food.price.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                    })}
                </Text>
                <View style={styles.button}>
                    <Button
                        title='Add to cart'
                        color='white'
                        onPress={() => handleAddToCart(food)}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: "#FFF",
        height: "100%",
    },
    image: {
        width: "100%",
        height: 300,
    },
    text: {
        marginTop: 10,
        fontWeight: "bold",
        textTransform: "capitalize",
        fontSize: 40,
    },
    description: {
        fontSize: 20,
        color: "gray",
    },
    addToCart: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
    },
    button: {
        backgroundColor: "red",
        flexGrow: 1,
    },
    price: {
        flexGrow: 1,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
    },
});
