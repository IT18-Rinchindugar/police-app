import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ChoiceScreen } from "./Home";
import { NewsListScreen, NewsDetails } from "./News";
import { HealthScreen } from "./Health";
const HomeStack = createStackNavigator();
export const HomeNavigator = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Choice" component={ChoiceScreen} />
      <HomeStack.Screen name="News" component={NewsListScreen} />
      <HomeStack.Screen name="Health" component={HealthScreen} />
      <HomeStack.Screen name="NewsDetails" component={NewsDetails} />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
