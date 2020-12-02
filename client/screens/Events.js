import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../store/actions/actionEvents";
import { ButtonGroup } from "react-native-elements";
import Lists from "../components/Lists";
import Cards from "../components/Cards";
import Loading from "../components/Loading";

export default function Events({ navigation }) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [viewChoice, setViewChoice] = useState(1);
  const [viewButtons] = useState(["List", "Card"]);

  const { events, tracked } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  useEffect(() => {
    if (events && events.length && tracked.length) {
      setLoading(false);
    }
  }, [events, tracked]);

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

  if (loading) return <Loading />;

  return (
    <View style={{ flex: 1 }}>
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
        <Lists events={events} tracked={tracked} handleToDetail={handleToDetail} />
      )}
    </View>
  );
}
