import React from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Categories from "./screens/Categories";
import Category from "./screens/Category";
import Food from "./screens/Food";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

import axios from "axios";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./screens/Cart";

axios.defaults.baseURL = "https://food-eccomerce.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

const CategoriesStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TitleHeaderBar(props) {
    return <Text style={styles.text}>{props.children}</Text>;
}

function CategoriesStackScreen() {
    return (
        <CategoriesStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#f4511e",
                },
                headerTintColor: "#fff",
                headerTitle: (props) => <TitleHeaderBar {...props} />,
            }}>
            <CategoriesStack.Screen name='Categories' component={Categories} />
            <CategoriesStack.Screen
                name='Category'
                component={Category}
                options={({ route }) => ({
                    title: route.params.category.name,
                })}
            />
            <CategoriesStack.Screen
                name='Food'
                component={Food}
                options={({ route }) => ({
                    title: route.params.food.name,
                })}
            />
        </CategoriesStack.Navigator>
    );
}

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer
                screenOptions={{ headerStyle: { backgroundColor: "#f4511e" } }}>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === "Home") {
                                iconName = focused
                                    ? "home-outline"
                                    : "home-outline";
                            } else if (route.name === "Profile") {
                                iconName = focused ? "ios-list" : "ios-list";
                            } else if (route.name === "Cart") {
                                iconName = focused
                                    ? "cart-outline"
                                    : "cart-outline";
                            } else if (route.name === "Categories") {
                                iconName = focused
                                    ? "grid-outline"
                                    : "grid-outline";
                            }

                            // You can return any component that you like here!
                            return (
                                <Ionicons
                                    name={iconName}
                                    size={size}
                                    color={color}
                                />
                            );
                        },
                        tabBarActiveTintColor: "tomato",
                        tabBarInactiveTintColor: "gray",
                    })}>
                    <Tab.Screen
                        name='Home'
                        component={Home}
                        options={{
                            headerStyle: { backgroundColor: "#f4511e" },
                            headerTintColor: "#fff",
                            headerTitle: (props) => (
                                <TitleHeaderBar {...props} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name='Categories'
                        component={CategoriesStackScreen}
                        options={{ headerShown: false }}
                    />
                    <Tab.Screen
                        name='Cart'
                        component={Cart}
                        options={{
                            headerStyle: { backgroundColor: "#f4511e" },
                            headerTintColor: "#fff",
                            headerTitle: (props) => (
                                <TitleHeaderBar {...props} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name='Profile'
                        component={Profile}
                        options={{
                            headerStyle: { backgroundColor: "#f4511e" },
                            headerTintColor: "#fff",
                            headerTitle: (props) => (
                                <TitleHeaderBar {...props} />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    text: {
        textTransform: "capitalize",
        fontWeight: "bold",
        color: "#fff",
        fontSize: 16
    },
});

{
    /*  */
}
