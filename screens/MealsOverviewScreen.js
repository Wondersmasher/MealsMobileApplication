import React from "react";
import { Text, View } from "react-native";

const MealsOverviewScreen = ({ navigation, route }) => {
  const catId = route.params.categoryId;
  return (
    <View>
      <Text>Meals Overview Screen {catId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;
