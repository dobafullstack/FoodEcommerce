import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from "react-native";
import FoodItem from "../components/FoodItem";
import { useDispatch, useSelector } from "react-redux";
import { getFoodByCateId } from "../redux/actions/food.action";
import { GET_FOOD_REQUIRED } from "../redux/constants/food.constant";

export default function Category({ route, navigation }) {
    const { category } = route.params;
    const dispatch = useDispatch();
    const foods = useSelector((state) => state.food);

    useEffect(() => {
        dispatch(getFoodByCateId(category._id));

        return () => {
            dispatch({ type: GET_FOOD_REQUIRED})
        };
    }, [dispatch]);

    return (
        <View>
            {foods.isLoading ? (
                <ActivityIndicator size='large' color='#f4511e' style={{marginTop: 16}} />
            ) : (
                <View>
                    <FlatList
                        data={foods.foods}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <View style={styles.wrapper}>
                                <FoodItem
                                    image={item.image}
                                    name={item.name}
                                    price={item.price}
                                    onPress={() =>
                                        navigation.navigate("Food", {
                                            food: item,
                                        })
                                    }
                                />
                            </View>
                        )}
                        keyExtractor={(item) => `${item._id}`}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 8,
    },
});
