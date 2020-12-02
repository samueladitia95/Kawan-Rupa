import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Events from "./Events";
import Tracked from "./Tracked";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator style={{ marginTop: 30 }}>
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Tracked" component={Tracked} />
    </Tab.Navigator>
  );
}
