import React from "react";
import { ScrollView } from "react-native";
import { ListItem, Avatar, Icon } from "react-native-elements";
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
        <ListItem
          key={el.id}
          bottomDivider
          onPress={() => {
            handleToDetail(el.id);
          }}
        >
          <Avatar source={{ uri: el.thumbnail_url }} />
          <ListItem.Content>
            <ListItem.Title>{el.name}</ListItem.Title>
            <ListItem.Subtitle>{`Location: ${el.location}`}</ListItem.Subtitle>
            <ListItem.Subtitle>{`Cost: ${el.is_paid ? "Paid" : "Free"}`}</ListItem.Subtitle>
          </ListItem.Content>
          <Icon
            name="add"
            onPress={() => {
              handleAddTracked(el.id);
            }}
          />
        </ListItem>
      ))}
    </ScrollView>
  );
}
