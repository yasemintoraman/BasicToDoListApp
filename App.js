import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [dailyTasks, setDailyTasks] = useState([]);

  function addTaskHandler(enteredTaskText) {
    setDailyTasks((currentDailyTasks) => [
      ...currentDailyTasks,
      { text: enteredTaskText, id: Math.random().toString() },
    ]);
  }

  function deleteTaskHandler(id) {
    setDailyTasks((currentDailyTasks) => {
      return currentDailyTasks.filter((task) => task.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <TaskInput onAddTask={addTaskHandler} />
      <View style={styles.tasksContainer}>
        <FlatList
          data={dailyTasks}
          renderItem={(itemData) => {
            return (
              <TaskItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteTaskHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  tasksContainer: {
    flex: 5,
  },
});
