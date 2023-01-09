import { useIsFocused } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text, RefreshControl } from "react-native";
import { deleteTask, getTasks } from "../api";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const isFocused = useIsFocused();

  const loadTask = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    
    loadTask();
  }, [isFocused]);

  const handleDelete = async (id) => {
    await deleteTask(id);
    await loadTask();
  };

  const renderItem = ({ item }) => {
    return <TaskItem task={item} handleDelete={handleDelete} />;
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await loadTask();
    setRefreshing(false);
  });

  return (
    <FlatList
      style={{ width: "100%" }}
      data={tasks}
      keyExtractor={(item) => item.id + ""}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          colors={["#78e08f"]}
          onRefresh={onRefresh}
          progressBackgroundColor="#0a3d62"
        />
      }
    />
  );
};

const styles = StyleSheet.create({});

export default TaskList;
