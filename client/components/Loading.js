import React from "react";
import { ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <ActivityIndicator
      size="large"
      color="#000"
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    />
  );
}
