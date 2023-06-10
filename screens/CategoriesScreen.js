import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesTitleGrid from "../components/CategoriesTitleGrid";
const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <CategoriesTitleGrid
            title={itemData.item.title}
            color={itemData.item.color}
          />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
