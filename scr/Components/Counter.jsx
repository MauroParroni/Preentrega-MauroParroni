import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counter/counterSlice";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const [add, setAdd] = useState(0);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Pressable
          style={styles.counterButtons}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.signs}>-</Text>
        </Pressable>

        <Text style={styles.signs}>{counter}</Text>

        <Pressable
          style={styles.counterButtons}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.signs}>+</Text>
        </Pressable>
      </View>

      <View style={styles.inputContaienr}>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="cantidad a sumar"
          value={Number(add)}
          onChangeText={(value) => setAdd(Number(value))}
        />

        <Pressable onPress={() => dispatch(incrementByAmount(add))}>
          <Text>add</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },

  counterContainer: {
    flexDirection: "row",

    backgroundColor: "green",

    justifyContent: "space-between",

    height: 50,
  },

  counterButtons: {
    backgroundColor: "blue",

    width: "33%",

    justifyContent: "center",

    alignItems: "center",
  },

  signs: {
    fontSize: 35,
  },

  input: {
    backgroundColor: "white",

    width: "80%",

    height: 30,
  },

  inputContaienr: {
    flexDirection: "row",

    marginVertical: 10,

    padding: 10,
  },
});
