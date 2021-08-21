import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { SwipeListView } from "react-native-swipe-list-view";
import Ionicons from "react-native-vector-icons/Ionicons";
import { removeCart } from "../redux/actions/cart.action";

export default function Cart({ navigation }) {
    const cart = useSelector((state) => state.cart);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    const handleRemoveCart = (data) => {
        dispatch(removeCart(data.item));
    };

    useEffect(() => {
        navigation.setOptions({ tabBarBadge: cart.products.length });
        setProducts(cart.products);
    }, [cart, cart.products]);
    return (
        <ScrollView style={{ paddingBottom: 16 }}>
            <View>
                <SwipeListView
                    data={products}
                    renderItem={({ item }) => (
                        <View style={styles.wrapper}>
                            <CartItem
                                image={item.product.image}
                                name={item.product.name}
                                price={item.product.price}
                                count={item.count}
                                item={item}
                            />
                        </View>
                    )}
                    renderHiddenItem={(data, rowMap) => (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => handleRemoveCart(data)}>
                            <View style={styles.rowBack}>
                                <Text style={{ color: "white" }}>Delete</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    rightOpenValue={-75}
                    disableRightSwipe={true}
                    keyExtractor={(item, index) => `${item.product._id}`}
                />
                <Text style={styles.price}>
                    Tổng cộng:{" "}
                    {cart.totalPrice.toLocaleString("vi", {
                        style: "currency",
                        currency: "VND",
                    })}
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 8,
    },
    price: {
        fontWeight: "bold",
        textAlign: "right",
        marginTop: 20,
    },
    rowBack: {
        backgroundColor: "red",
        width: 75,
        height: 110,
        padding: 8,
        marginTop: 12,
        marginLeft: "auto",
        marginRight: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
});
