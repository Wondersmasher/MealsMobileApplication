import React from "react";
import { Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
// CATEGORIES
const MealsOverviewScreen = ({ navigation, route }) => {
  const catId = route.params.categoryId;
  const displayMeal = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return (
    <View>
      <Text>Meals Overview Screen {catId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;
