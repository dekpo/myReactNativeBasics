import React from "react";
import { Text, View } from "react-native";

const getName = (firsName,lastName) => {
    return firsName + " " + lastName;
  }
  // un composant React de classe
  class ClassComponent extends React.Component {
    render( props ) {
      return (
        <View>
          <Text>My text one</Text>
          <Text>My first class component</Text>
          <Text>My name is { getName('Dekpo',this.props.name)  }</Text>
        </View>
      );
    }
  }

  export default ClassComponent