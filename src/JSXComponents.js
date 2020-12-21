import React from 'react';
import { Text } from "react-native";

const JsxOne = () => {
    return <Text>I'm a JSX Component</Text>
}

const JsxTwo = () => {
    return (
    <Text
    style={{fontSize:20, color:'red'}}>
        I'm a JSX Component
    </Text>
    )
}

export default { JsxOne, JsxTwo }