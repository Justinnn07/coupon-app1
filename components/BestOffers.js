import React from "react";
import { View, Text, Image, Button } from "react-native";

const BestOffers = ({ dishName, dishRate, dishImage }) => {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "lightgray",
        borderRadius: 10,
        flex: 1,
        margin: 10,
        marginTop: -5,
      }}
    >
      <Image
        source={{
          uri: dishImage,
        }}
        style={{ width: 210, height: 190, borderRadius: 10 }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>{dishName}</Text>
      <Text>{dishRate}</Text>
      <Button title="Shop Now" color="green" />
    </View>
  );
};

export default BestOffers;
