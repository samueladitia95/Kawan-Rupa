import React from "react";
import { ScrollView } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { useDispatch } from "react-redux";
import { addTracked } from "../store/actions/actionTracks";

export default function ListView({ events, handleToDetail }) {
  const dispatch = useDispatch();

  const handleAddTracked = (id) => {
    dispatch(addTracked(id));
  };

  return (
    <ScrollView>
      {events.map((el) => (
        <ListItem key={el.id} bottomDivider>
          <Avatar
            onPress={() => {
              handleToDetail(el.id);
            }}
            source={{ uri: el.thumbnail_url }}
          />
          <ListItem.Content>
            <ListItem.Title
              onPress={() => {
                handleToDetail(el.id);
              }}
            >
              {el.name}
            </ListItem.Title>
            <ListItem.Subtitle>{`Location: ${el.location}`}</ListItem.Subtitle>
            <ListItem.Subtitle>{`Cost: ${el.is_paid ? "Paid" : "Free"}`}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron
            color="red"
            onPress={() => {
              handleAddTracked(el.id);
            }}
          />
        </ListItem>
      ))}
    </ScrollView>
  );
}
