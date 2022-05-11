import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    input: {
        borderWidth: 1,
        borderColor: "#808080",
        borderRadius: 6,
        padding: 10,
        fontSize: 16
    },
    errorText: {
        color: "crimson",
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 6,
        textAlign: "center"
    }
});