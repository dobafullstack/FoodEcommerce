import React, { useState } from "react";
import {
    StyleSheet,
    ActivityIndicator,
    View,
    TouchableOpacity,
    Image,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/actions/auth.action";

export default function Profile() {
    const user = useSelector((state) => state.auth.user);
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [address, setAddress] = useState(user.address);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.isLoading);

    const handeUpdateUser = () => {
        dispatch(updateUser(username, email, phone, address));
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8}>
                <Image source={{ uri: user.image }} style={styles.image} />
            </TouchableOpacity>
            <CustomInput
                placeholder='Username'
                defaultValue={username}
                onChangeText={(text) => setUsername(text)}
            />
            <CustomInput
                placeholder='Email'
                defaultValue={email}
                onChangeText={(text) => setEmail(text)}
            />
            <CustomInput
                placeholder='Phone'
                defaultValue={phone}
                onChangeText={(text) => setPhone(text)}
            />
            <CustomInput
                placeholder='Address'
                defaultValue={address}
                onChangeText={(text) => setAddress(text)}
            />
            <CustomButton
                width='50%'
                color='#f4511e'
                text='Save Change'
                textColor='white'
                borderRadius={10}
                onPress={() => handeUpdateUser()}
            />
            {isLoading ? (
                <ActivityIndicator size='large' color='#f4511e' style={{marginTop: 16}}/>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        paddingVertical: 16,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});
