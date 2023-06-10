import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesTitleGrid from "../components/CategoriesTitleGrid";
const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const onPress = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoriesTitleGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPress}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
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
