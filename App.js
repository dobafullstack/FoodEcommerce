import React from "react";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { PersistGate } from "redux-persist/integration/react";

import Categories from "./screens/Categories";
import Category from "./screens/Category";
import Food from "./screens/Food";
import Home from "./screens/Home";
import Personal from "./screens/Personal";
import CheckOut from "./screens/CheckOut";
import Profile from "./screens/Profile";
import WishList from "./screens/WishList";
import OrderHistory from "./screens/OrderHistory";

import axios from "axios";
import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
import Cart from "./screens/Cart";

axios.defaults.baseURL = "https://food-eccomerce.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

const CategoriesStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const PersonalStack = createNativeStackNavigator();
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

function CartStackScreen() {
    return (
        <CartStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#f4511e",
                },
                headerTintColor: "#fff",
                headerTitle: (props) => <TitleHeaderBar {...props} />,
            }}>
            <CategoriesStack.Screen name='Cart' component={Cart} />
            <CategoriesStack.Screen name='Checkout' component={CheckOut} />
        </CartStack.Navigator>
    );
}

function PersonalStackStackScreen() {
    return (
        <PersonalStack.Navigator
            screenOptions={{ headerStyle: { backgroundColor: "#f4511e" }, headerTintColor: "#FFF"}}>
            <CategoriesStack.Screen
                name='Personal'
                component={Personal}
                options={{ headerShown: false }}
            />
            <CategoriesStack.Screen name='Profile' component={Profile} />
            <CategoriesStack.Screen name='WishList' component={WishList} />
            <CategoriesStack.Screen
                name='Order History'
                component={OrderHistory}
            />
        </PersonalStack.Navigator>
    );
}

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer
                    screenOptions={{
                        headerStyle: { backgroundColor: "#f4511e" },
                    }}>
                    <Tab.Navigator
                        screenOptions={({ route }) => ({
                            tabBarIcon: ({ focused, color, size }) => {
                                let iconName;

                                if (route.name === "Home") {
                                    iconName = focused
                                        ? "home-outline"
                                        : "home-outline";
                                } else if (route.name === "Personal") {
                                    iconName = focused
                                        ? "person-outline"
                                        : "person-outline";
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
                            component={CartStackScreen}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Tab.Screen
                            name='Personal'
                            component={PersonalStackStackScreen}
                            options={{ headerShown: false }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
}

const styles = StyleSheet.create({
    text: {
        textTransform: "capitalize",
        fontWeight: "bold",
        color: "#fff",
        fontSize: 16,
    },
});

{
    /*  */
}
