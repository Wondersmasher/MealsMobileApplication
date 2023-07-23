import React from "react";
import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

const CategoriesTitleGrid = ({ title, color, onPress }) => {
  const colors = { backgroundColor: color };
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed})=>[styles.pressable, pressed? styles.pressed : null]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, colors]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoriesTitleGrid;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    margin: 16,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    borderRadius: 8,
  },
  pressable: {
    flex: 1,
  },
  pressed:{
    opacity:.5
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  text: {
    fontWeight: "bold",
  },
});
