import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Modal, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons'

//components
import TodoItem from '../components/TodoItem';
import AddBtn from '../shared/add-btn';

const Home = ({ navigation }) => {
    //state
    const [todoList, setTodoList] = useState([
        {
            name: "test"
        },
        {
            name: "test2"
        },
        {
            name: "test3"
        }
    ]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTodo, setSelectedTodo] = useState(null);

    //handlers
    const onAddHandler = (todo) => {
        setTodoList([...todoList, todo])
        navigation.goBack()
    }
    const onTodoClickHandler = (selected) => {
        console.log(selected)
        setSelectedTodo(selected)
        setModalOpen(true);
    }

    return (
        <View style={globalStyles.container}>
            <AddBtn
                text="Nieuwe todo"
                onPress={() => navigation.navigate("CreateTodo", { handler: onAddHandler })}
            />
            <Modal visible={modalOpen}>
                <MaterialIcons
                    name="close"
                    size={24}
                    onPress={() => setModalOpen(false)}
                    style={styles.modal}
                />
                <Text>{selectedTodo?.naam || "empty"}</Text>
            </Modal>

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