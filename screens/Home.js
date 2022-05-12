import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons'
import uuid from 'react-native-uuid';

//components
import TodoItem from '../components/TodoItem';
import AddBtn from '../shared/icon-btn';

const Home = ({ navigation }) => {
    //state
    const [todoList, setTodoList] = useState([
        {
            key: uuid.v4(),
            name: "Boodschappen",
            description: "Boodschappen doen voor het weekend",
            priority: 3
        },
        {
            key: uuid.v4(),
            name: "Afspraak verzetten",
            description: "Afspraak van woensdag verplaatsen naar volgende week",
            priority: 5
        },
        {
            key: uuid.v4(),
            name: "Leren voor de tentamens",
            description: "Leren voor opkomende tentamens",
            priority: 5
        }
    ]);

    //handlers
    const onAddHandler = (todo) => {
        setTodoList([...todoList, todo])
        navigation.goBack()
    }
    const onTodoClickHandler = (selected) => {
        console.log(selected)
        navigation.navigate("TodoDetails", { todo: selected, removeTodo: removeTodo }); //warning 
    }
    const removeTodo = (key) => {
        console.log(key)
        setTodoList(() => {
            return todoList.filter(item => item.key !== key);
        })
        navigation.goBack()
    }

    return (
        <View style={globalStyles.container}>
            <AddBtn
                iconName="add"
                iconColor="white"
                buttonColor="#24a0ed"
                text="Nieuwe todo"
                onPress={() => navigation.navigate("CreateTodo", { handler: onAddHandler })}
            />

            <FlatList
                data={todoList}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { onTodoClickHandler(item) }}>
                        <TodoItem todo={item} />
                    </TouchableOpacity>
                )}
                style={styles.todoList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    todoList: {
        marginTop: 20
    },
    modal: {
        height: "50%",
        width: "50%"
    }
})

export default Home;