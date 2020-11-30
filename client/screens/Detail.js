import React, { useEffect, useState } from "react";
import { Text, ScrollView, View } from "react-native";
import { Card, Button, Icon, Tile } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { getOneEvent } from "../store/actions/actionEvents";

export default function Detail({ id }) {
  const dispatch = useDispatch();
  const { event } = useSelector((state) => state);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getOneEvent(id));
  }, []);

  useEffect(() => {}, [event]);

  if (loading) return <Text>Loading...</Text>;

  return (
    <View>
      {/* <Card key={el.id}>
        <Card.Title>{el.name}</Card.Title>
        <Card.Divider />
        <Card.Image source={{ uri: el.thumbnail_url }} />
        <Text style={{ marginBottom: 10 }}>{`Location: ${el.location}`}</Text>
        <Text style={{ marginBottom: 10 }}>{`Cost: ${el.is_paid ? "Paid" : "Free"}`}</Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
          title="Save Event"
        />
      </Card> */}
    </View>
  );
}
