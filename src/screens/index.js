import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ChoiceScreen } from "./Home";
import { NewsScreen } from "./News";
import { HealthScreen } from "./Health";
const HomeStack = createStackNavigator();
export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Choice" component={ChoiceScreen} />
      <HomeStack.Screen name="News" component={NewsScreen} />
      <HomeStack.Screen name="Health" component={HealthScreen} />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
