import React from "react";
import { ScrollView } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { useDispatch } from "react-redux";
import { addTracked } from "../store/actions/actionTracks";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function ListView({ events, handleToDetail, tracked }) {
  const dispatch = useDispatch();

  const handleAddTracked = (id) => {
    dispatch(addTracked(id));
  };

  const checkTracked = (id) => {
    let isAdded = false;
    tracked.forEach((el) => {
      if (el.EventId == id) {
        isAdded = true;
      }
    });
    return isAdded;
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
            name="heart"
            solid={checkTracked(el.id)}
            onPress={() => {
              handleAddTracked(el.id);
            }}
            size={30}
          />
        </ListItem>
      ))}
    </ScrollView>
  );
}
