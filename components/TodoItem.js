import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TodoItem = ({ todo }) => {
    return (
        <View style={styles.card}>
            <View style={styles.content}>
                <Text style={styles.text}>{todo.name}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: "white",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6
    },
    content: {
        margin: 18,
        marginVertical: 10,
    },
    text: {
        color: "black",
    }
})
export default TodoItem;