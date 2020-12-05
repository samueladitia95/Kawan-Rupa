import React, { useEffect, useState } from "react";
import { ListItem, Avatar, Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { deleteTracked, swapOrder } from "../store/actions/actionTracks";
import DraggableFlatList from "react-native-draggable-flatlist";
import { View } from "react-native";

export default function Tracked({ navigation }) {
  const dispatch = useDispatch();
  const { tracked } = useSelector((state) => state);

  const [displayedTracked, setDisplayedTracked] = useState([]);

  useEffect(() => {
    setDisplayedTracked(tracked);
  }, [tracked]);

  const handleToDetail = (id) => {
    navigation.navigate("Detail", { id });
  };

  const handleDelete = (id) => {
    dispatch(deleteTracked(id));
  };

  const handleReoder = (tracked) => {
    setDisplayedTracked(tracked);
    const newOrder = tracked.map((el) => {
      return el.id;
    });
    dispatch(swapOrder(newOrder));
  };

  const renderItem = ({ item, index, drag }) => {
    return (
      <ListItem
        key={item.id}
        bottomDivider
        onLongPress={drag}
        onPress={() => {
          handleToDetail(item.Event.id);
        }}
      >
        <Avatar source={{ uri: item.Event.thumbnail_url }} />
        <ListItem.Content>
          <ListItem.Title>{item.Event.name}</ListItem.Title>
          <ListItem.Subtitle>{`Location: ${item.Event.location}`}</ListItem.Subtitle>
          <ListItem.Subtitle>{`Cost: ${item.Event.is_paid ? "Paid" : "Free"}`}</ListItem.Subtitle>
        </ListItem.Content>
        <Icon
          name="delete"
          onPress={() => {
            handleDelete(item.id);
          }}
        />
      </ListItem>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <DraggableFlatList
        data={displayedTracked}
        renderItem={renderItem}
        keyExtractor={(item) => `draggable-item-${item.id}`}
        onDragEnd={({ data }) => {
          handleReoder(data);
        }}
        activationDistance={9}
      />
    </View>
  );
}
