import { View, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const Layout = ({ children }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#222f3e" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#222f3e",
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
});

export default Layout;
