import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function CustomButton(props) {
    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{
                    backgroundColor: props.color,
                    width: props.width,
                    paddingVertical: 16,
                    paddingHorizontal: 8,
                    height: props.height,
                    justifyContent: "center",
                    borderRadius: props.borderRadius
                }}
                onPress={props.onPress}>
                <Text style={{ color: props.textColor, textAlign: 'center' }}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})
