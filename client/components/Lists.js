import React from "react";
import { ScrollView } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

export default function ListView({ events }) {
  return (
    <ScrollView>
      {events.map((el) => (
        <ListItem key={el.id} bottomDivider>
          <Avatar source={{ uri: el.thumbnail_url }} />
          <ListItem.Content>
            <ListItem.Title>{el.name}</ListItem.Title>
            <ListItem.Subtitle>{`Location: ${el.location}`}</ListItem.Subtitle>
            <ListItem.Subtitle>{`Cost: ${el.is_paid ? "Paid" : "Free"}`}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron color="red" />
        </ListItem>
      ))}
    </ScrollView>
  );
}
