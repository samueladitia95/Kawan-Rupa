import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../store/actions/actionEvents";
import { ButtonGroup } from "react-native-elements";
import Lists from "../components/Lists";
import Cards from "../components/Cards";
import GestureRecognizer from "react-native-swipe-gestures";

export default function Events({ navigation }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [viewChoice, setViewChoice] = useState(1);
  const [viewButtons] = useState(["List", "Card"]);

  const { events } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  useEffect(() => {
    if (events && events.length) {
      setLoading(false);
    }
  }, [events]);

  const handleChangeView = (index) => {
    setViewChoice(+index);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleToDetail = (id) => {
    navigation.navigate("Detail", { id });
  };

  const handleToTracked = () => {
    navigation.push("Tracked");
  };

  if (loading) return <Text>Loading</Text>;

  return (
    <GestureRecognizer
      onSwipeLeft={() => {
        handleToTracked();
      }}
      style={styles.container}
    >
      <ButtonGroup
        onPress={(index) => {
          handleChangeView(index);
        }}
        buttons={viewButtons}
        containerStyle={{ height: 40 }}
      />
      {viewChoice ? (
        <Cards events={events} handleToDetail={handleToDetail} />
      ) : (
        <Lists events={events} handleToDetail={handleToDetail} />
      )}
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
