import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function TaskInput(props) {
  const [enteredTaskText, setEnteredTaskText] = useState("");

  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskHandler() {
    props.onAddTask(enteredTaskText);
    setEnteredTaskText("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your daily to-do!"
        onChangeText={goalInputHandler}
        value={enteredTaskText}
      />
      <Button title="Add Task" onPress={addTaskHandler} />
    </View>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#cccccc',
      width: '70%',
      marginRight: 8,
      padding: 8,
    },
  });
  
