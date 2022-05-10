import React from 'react';
import { Text, View } from 'react-native';

const TodoItem = ({todo}) => {
    console.log(todo)
    return (  
        <View>
            <Text>{todo.naam}</Text>
        </View>
    );
}
 
export default TodoItem;