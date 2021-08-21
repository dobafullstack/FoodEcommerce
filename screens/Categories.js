import axios from "axios";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";

export default function Categories(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("/categories")
            .then((res) => {
                setItems(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [items]);
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                numColumns={2}
                contentContainerStyle={{
                    backgroundColor: "#F8F8F8",
                    paddingVertical: 20,
                }}
                renderItem={({ item }) => (
                    <View style={styles.wrapper}>
                        <CategoryItem
                            image={item.image}
                            name={item.name}
                            onPress={() => {
                                props.navigation.navigate("Category", {
                                    category: item,
                                });
                            }}
                        />
                    </View>
                )}
                keyExtractor={(item) => `${item._id}`}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    text: {
        color: "#fff",
    },
    wrapper: {
        flex: 1,
        paddingHorizontal: 8,
    },
});
