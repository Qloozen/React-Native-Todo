import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons'
import AddBtn from '../shared/icon-btn';

const TodoDetails = ({ route, navigation }) => {
    const { todo, removeTodo } = route.params;

    return (
        <View style={{ ...globalStyles.container, ...styles.container }}>
            <View>
                <Text style={styles.headline}>{todo.name}</Text>
                <Text style={styles.body}>{todo.description}</Text>
                <Text style={styles.body}>{todo.priority}</Text>
            </View>

            <AddBtn
                iconName="delete"
                iconColor="white"
                buttonColor="red"
                text="Verwijder todo"
                onPress={() => removeTodo(todo.key)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between"
    },
    headline: {
        fontSize: 28,
        fontWeight: "bold"
    },
    body: {
        fontSize: 18
    }
});

export default TodoDetails;