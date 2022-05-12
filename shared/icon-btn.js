import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

const AddBtn = ({ iconName, iconColor, buttonColor, text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ ...styles.button, backgroundColor: buttonColor }}>
                <MaterialIcons
                    name={iconName}
                    size={28}
                    color={iconColor}
                />
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 12,
        alignSelf: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 5
    }
})

export default AddBtn;