import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CreateToDo from '../screens/CreateToDo';
import TodoDetails from '../screens/TodoDetails';

const Stack = createNativeStackNavigator();

export default function HomeNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="CreateTodo" component={CreateToDo} />
                <Stack.Screen name="TodoDetails" component={TodoDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}