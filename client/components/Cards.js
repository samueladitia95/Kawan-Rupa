import React from "react";
import { Text, ScrollView, View, Dimensions, StyleSheet } from "react-native";
import { Card, Button, Icon, Tile } from "react-native-elements";

export default function CardView({ events, handleToDetail }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {events.map((el) => {
        return (
          <Tile
            width={Dimensions.get("window").width / 2}
            key={el.id}
            imageSrc={{ uri: el.thumbnail_url }}
            title={el.name}
            titleStyle={{
              fontSize: 15,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.6);",
              padding: 6,
            }}
            featured={true}
            activeOpacity={1}
            onPress={() => {
              handleToDetail(el.id);
            }}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
