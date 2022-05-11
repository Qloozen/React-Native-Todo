import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Formik } from "formik";
import { globalStyles } from '../styles/global';
import * as yup from "yup";

const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required()
        .min(3),
    description: yup
        .string()
        .required()
        .min(3),
    priority: yup
        .string()
        .required()
        .test("between-1-and-5", "Priority is between 1 and 5", (val) => parseInt(val) < 6 && parseInt(val) > 0)
})

const CreateToDo = ({ route }) => {
    const { handler } = route.params
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ name: "", description: "", priority: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    handler(values)
                }}
            >
                {({ handleChange, touched, errors, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            onChangeText={handleChange("name")}
                            value={values.name}
                            placeholder="name"
                        />
                        <Text style={globalStyles.errorText}>{touched.name && errors.name}</Text>

                        <TextInput
                            multiline
                            minHeight={60}
                            style={globalStyles.input}
                            onChangeText={handleChange("description")}
                            value={values.description}
                            placeholder="description"
                        />
                        <Text style={globalStyles.errorText}>{touched.description && errors.description}</Text>

                        <TextInput
                            style={globalStyles.input}
                            onChangeText={handleChange("priority")}
                            value={values.priority}
                            placeholder="priority (1-5)"
                            keyboardType='number'
                        />
                        <Text style={globalStyles.errorText}>{touched.priority && errors.priority}</Text>


                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    );
}


export default CreateToDo;