import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
//components
import TodoItem from '../components/TodoItem';

const Home = () => {
    const [todoList, setTodoList] = useState([
        {
            naam: "test"
        },
        {
            naam: "test2"
        },
        {
            naam: "test3"
        }
    ]);
    return (
        <View>
            <FlatList
                data={todoList}
                renderItem={({ item }) => (
                    <TodoItem todo={item} />
                )}
            />
        </View>
    );
}

export default Home;