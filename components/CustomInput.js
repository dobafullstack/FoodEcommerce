import React from 'react'
import { StyleSheet, TextInput } from "react-native";

export default function CustomInput({placeholder, defaultValue, onChangeText}) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChangeText={onChangeText}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "70%",
        borderBottomWidth: 0.5,
        paddingHorizontal: 20,
        borderColor: "rgba(18, 18, 18, 0.3)",
        borderRadius: 10,
        color: "#121212",
        marginVertical: 16,
        fontSize: 16,
    },
});
