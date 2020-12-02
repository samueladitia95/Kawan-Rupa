import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { setUser } from "../store/actions/actionUser";
import { useDispatch } from "react-redux";

export default function Home({ navigation }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");

  const handleUserInput = (value) => {
    setName(value);
  };

  const handleUserSubmit = () => {
    dispatch(setUser({ name }));
    navigation.navigate("Events");
  };

  return (
    <View style={styles.container}>
      <Text>Please Enter your Name</Text>
      <Input
        placeholder="Please Enter Your Name"
        leftIcon={<Icon name="user" size={24} color="black" />}
        onChangeText={(value) => {
          handleUserInput(value);
        }}
      />
      <Button
        title="Submit Name"
        onPress={() => {
          handleUserSubmit();
        }}
      />
    </View>
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
