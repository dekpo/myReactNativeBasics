import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, Button } from "react-native";
import ClassComponent from "./src/ClassComponent"
import FunctionComponent from "./src/FunctComponent";

import Components from "./src/JSXComponents";

// composant avec Image locale
const MyImage = () => {
  return(
    <Image
    source={ require('./assets/logoExpo.png') }
    style={{width: 200, height: 200}}
    />
  )
}

// composant avec Image distante
const MyDistImage = () => {
  return(
    <Image
    source={{uri:"https://www.ubidreams.fr/wp-content/uploads/2020/06/logo-react-native.png"} }
    style={{width: 200, height: 200}}
    />
  )
}

// composant avec des props
const PropsComponent = (props) => {
  return <Text>Coucou je suis { props.name }</Text>
}

// composant de classe avec State
class StateComponent extends React.Component {
  constructor(){
    super();
    // déclaration du state
    this.state = {
      name: "Personne"
    }
  }
  render() {
    return(
      <View>
      <Text>Coucou ceci est une valeur du State { this.state.name }</Text>
      <Button onPress={ () => { this.setState( {name: "Moi"}) } } title="Change le State" />
      </View>
    )
  }
}

// composant fonctionnel avec State
const FunctStateComponent = () =>{
 // déclaration de State avec Hook useState()
 const [name,setName] = useState("Personne");

  return (
    <View>
      <Text>Coucou ceci est une valeur du State { name }</Text>
      <Button onPress={ () => { setName("Moi") } } title="Change le State" />
      </View>
  )
}

// composant fonctionnel avec State
const FunctCountComponent = () =>{
  // déclaration de State avec Hook useState()
  const [count,setCount] = useState(0);
 
   return (
       <Button onPress={ () => { setCount(count+1) } }
       title={ 'VOUS AVEZ CLIQUÉ ' + count + ' FOIS' } />
   )
 } 

 // bouton qui se désactive avec les State
 const ButtonDisabledComp = () => {
   const [isActive,setActive] = useState(true);

   return (
     <Button 
     onPress={ () =>{ setActive( !isActive ) } } 
     title={ isActive 
     ? "Vous n'avez pas cliqué !"
     : "Merci ça va mieux !" } 
     disabled={ !isActive } />
   )
 }


export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>Hello this is my first App !</Text>

      <ClassComponent name="Yologaza" />

      <StateComponent />

      <FunctStateComponent />

      <FunctCountComponent />

      <ButtonDisabledComp />

      <FunctionComponent />

      <Components.JsxOne />

      <Components.JsxTwo />
      <Components.JsxTwo />
      <Components.JsxTwo />

      <PropsComponent name="Dekpo" />

      <MyImage />

      <MyDistImage />

      <MyImage />

      <MyDistImage />

      <Components.JsxOne />

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
