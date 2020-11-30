import React, { useEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import { Card, Button, Icon, Tile } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { getOneEvent } from "../store/actions/actionEvents";
import { isEmpty } from "lodash";

export default function Detail({ route }) {
  const dispatch = useDispatch();
  const { event } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);
  const { id } = route.params;

  useEffect(() => {
    dispatch(getOneEvent(id));
  }, []);

  useEffect(() => {
    if (!isEmpty(event)) {
      setLoading(false);
    }
  }, [event]);

  if (loading) return <Text>Loading...</Text>;

  return (
    <View>
      <Card>
        <Card.Title>{event.name}</Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri: event.thumbnail_url }} />
        <Text style={{ marginBottom: 10 }}>{`Location: ${event.location}`}</Text>
        <Text style={{ marginBottom: 10 }}>{`Cost: ${event.is_paid ? "Paid" : "Free"}`}</Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title="Save Event"
        />
      </Card>
    </View>
  );
}
