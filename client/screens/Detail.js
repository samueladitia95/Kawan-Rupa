import React, { useEffect, useState } from "react";
import { Card, Button, Icon, Text } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { getOneEvent, emptyEvent } from "../store/actions/actionEvents";
import { addTracked } from "../store/actions/actionTracks";
import { isEmpty } from "lodash";
import { View } from "react-native";

export default function Detail({ route, navigation }) {
  const dispatch = useDispatch();
  const { event } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);
  const { id } = route.params;

  useEffect(() => {
    dispatch(getOneEvent(id));
  }, []);

  useEffect(() => {
    return () => {
      dispatch(emptyEvent());
    };
  }, []);

  useEffect(() => {
    if (!isEmpty(event)) {
      setLoading(false);
    }
  }, [event]);

  const handleAddTracked = (EventId) => {
    dispatch(addTracked(EventId));
  };

  if (loading) return <Text>Loading...</Text>;

  return (
    <View style={{ marginTop: 30 }}>
      <Card>
        <Card.Title>{event.name}</Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri: event.thumbnail_url }} />
        <Text style={{ marginBottom: 10 }}>{`Location: ${event.location}`}</Text>
        <Text style={{ marginBottom: 10 }}>{`Cost: ${event.is_paid ? "Paid" : "Free"}`}</Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title="Track Event"
          onPress={() => {
            handleAddTracked(event.id);
          }}
        />
      </Card>
    </View>
  );
}
