import React, { useEffect, useState } from "react";
import { Text, ListItem, Avatar, Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { getTracked, deleteTracked, swapOrder } from "../store/actions/actionTracks";
import GestureRecognizer from "react-native-swipe-gestures";
import { View } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";

export default function Tracked({ navigation }) {
  const dispatch = useDispatch();
  const { tracked } = useSelector((state) => state);

  const [displayedTracked, setDisplayedTracked] = useState([]);

  useEffect(() => {
    dispatch(getTracked());
  }, []);

  useEffect(() => {
    if (tracked.length) {
      setDisplayedTracked(tracked);
    }
  }, [tracked]);

  const handleToBack = () => {
    navigation.goBack();
  };

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

  const renderItem = ({ item, index, drag, isActive }) => {
    return (
      <ListItem key={item.id} bottomDivider onLongPress={drag}>
        <Avatar
          onPress={() => {
            handleToDetail(item.Event.id);
          }}
          source={{ uri: item.Event.thumbnail_url }}
        />
        <ListItem.Content>
          <ListItem.Title
            onPress={() => {
              handleToDetail(item.Event.id);
            }}
          >
            {item.Event.name}
          </ListItem.Title>
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
    // <GestureRecognizer
    //   onSwipeRight={() => {
    //     handleToBack();
    //   }}
    //   style={{ height: 10000 }}
    // >
    <View style={{ flex: 1 }}>
      <DraggableFlatList
        data={displayedTracked}
        renderItem={renderItem}
        keyExtractor={(item) => `draggable-item-${item.id}`}
        onDragEnd={({ data }) => {
          handleReoder(data);
        }}
      />
    </View>
    // </GestureRecognizer>
  );
}
