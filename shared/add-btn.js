import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

const AddBtn = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <MaterialIcons
                    name="add"
                    size={28}
                    color="white"
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
        backgroundColor: "#24a0ed",
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