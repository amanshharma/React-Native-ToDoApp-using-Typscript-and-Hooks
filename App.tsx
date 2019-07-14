import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

interface IToDo {
  text: string;
  completed: boolean;
}

export default function App() {
  const [value, setValue] = useState<string>("");
  const [toDoList, setToDos] = useState<IToDo[]>([]);
  const [error, showError] = useState<Boolean>(false);

  return (
    <View>
      <Text>Todo List</Text>
      <View>
        <TextInput
          placeholder="Enter your todo task..."
          value=""
          onChangeText={e => {}}
        />
        <Button title="Add Task" onPress={() => {}} />
      </View>
      {error && <Text>Error: Input field is empty...</Text>}
      <Text>Your Tasks :</Text>
    </View>
  );
}
