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
import CustomButton from "../components/CustomButton";

export default function Cart({ navigation, route }) {
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
        <View>
            {products.length === 0 ? (
                <View
                    style={{
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                            opacity: 0.6,
                            color: "#121212",
                        }}>
                        Bạn chưa thêm gì trong giỏ hàng
                    </Text>
                </View>
            ) : (
                <View style={{ position: "relative", height: "100%" }}>
                    <ScrollView
                        style={{
                            paddingBottom: 16,
                        }}>
                        <View
                            style={{
                                position: "relative",
                                height: "100%",
                            }}>
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
                                            <Text style={{ color: "white" }}>
                                                Delete
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                                rightOpenValue={-75}
                                disableRightSwipe={true}
                                keyExtractor={(item, index) =>
                                    `${item.product._id}`
                                }
                                style={{ height: "100%", paddingBottom: 70 }}
                            />
                        </View>
                    </ScrollView>

                    <View
                        style={{
                            marginRight: 8,
                            marginTop: 20,
                            position: "absolute",
                            width: "100%",
                            flexDirection: "row",
                            bottom: 0,
                            left: 0,
                            justifyContent: "space-between",
                            backgroundColor: "#FFF",
                            height: 60,
                        }}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}>
                            <Text style={{ marginLeft: 16 }}>Sub Total:</Text>
                            <Text style={styles.price}>
                                {cart.totalPrice.toLocaleString("vi", {
                                    style: "currency",
                                    currency: "VND",
                                })}
                            </Text>
                        </View>
                        <CustomButton
                            text='Thanh toán'
                            width={150}
                            textColor='white'
                            color='#f4511e'
                            height='100%'
                            onPress={() => navigation.navigate("Checkout")}
                        />
                    </View>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 8,
    },
    price: {
        fontWeight: "bold",
        marginLeft: 8,
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
