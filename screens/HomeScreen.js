import React from "react";
import { View, StyleSheet, Text } from "react-native";

import TaskList from "../components/TaskList";
import Layout from "../components/Layout";

const HomeScreen = () => {
  return (
    <Layout>
      <TaskList />
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
