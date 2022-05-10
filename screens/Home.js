import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { global } from '../styles/global';

//components
import TodoItem from '../components/TodoItem';
import AddBtn from '../shared/add-btn';

const Home = () => {
    //state
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

    //handlers
    const onPressHandler = () => {
        console.log("add")
    }

    return (
        <View style={global.container}>
            <AddBtn
                text="Nieuwe todo"
                onPress={onPressHandler}
            />
            <FlatList
                data={todoList}
                renderItem={({ item }) => (
                    <TodoItem todo={item} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Home;