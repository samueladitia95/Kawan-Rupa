import React from "react";
import { Text, ScrollView, View } from "react-native";
import { Card, Button, Icon, Tile } from "react-native-elements";

export default function CardView({ events, handleToDetail }) {
  return (
    <ScrollView style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {events.map((el) => {
        return (
          // <Card key={el.id}>
          //   <Card.Title>{el.name}</Card.Title>
          //   <Card.Divider />
          //   <Card.Image source={{ uri: el.thumbnail_url }} />
          //   <Text style={{ marginBottom: 10 }}>{`Location: ${el.location}`}</Text>
          //   <Text style={{ marginBottom: 10 }}>{`Cost: ${el.is_paid ? "Paid" : "Free"}`}</Text>
          //   <Button
          //     icon={<Icon name="code" color="#ffffff" />}
          //     buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          //     title="Save Event"
          //   />
          // </Card>
          <Tile
            key={el.id}
            imageSrc={{ uri: el.thumbnail_url }}
            title={el.name}
            titleStyle={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.6);", padding: 10 }}
            contentContainerStyle={{ height: 100, marginBottom: 10 }}
            featured={true}
            activeOpacity={1}
            caption={`${el.location} \nCost: ${el.is_paid ? "Paid" : "Free"}`}
            captionStyle={{ color: "white", backgroundColor: "rgba(0, 0, 0, 0.6);", padding: 10 }}
            onPress={() => {
              handleToDetail(el.id);
            }}
          />
        );
      })}
    </ScrollView>
  );
}
