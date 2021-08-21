import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import FoodItem from '../components/FoodItem';

export default function Category({ route, navigation }) {
    const { category } = route.params;
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get(`/foods/${category._id}`)
            .then((res) => {
                setItems(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [items]);

    return (
        <View>
            <FlatList
                data={items}
                numColumns={2} 
                renderItem={({ item }) => (
                    <View style={styles.wrapper}>
                        <FoodItem image={item.image} name={item.name} price={item.price} onPress={() => navigation.navigate('Food', {
                            food: item
                        })}/>
                    </View>
                )}
                keyExtractor={(item) => `${item._id}`}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 8
    },
});

