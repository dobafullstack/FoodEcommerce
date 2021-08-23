import axios from "axios";
import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import CategoryItem from "../components/CategoryItem";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/actions/category.action";

export default function Categories(props) {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    return (
        <View style={styles.container}>
            {categories.isLoading ? (
                <ActivityIndicator size='large' color='#f4511e' />
            ) : (
                <FlatList
                    data={categories.category}
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
            )}
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
