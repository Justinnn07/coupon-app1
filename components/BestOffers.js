import React from "react";
import { View, Text, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const BestOffers = ({ dishName, dishRate, dishImage, onPress }) => {
  return (
    <TouchableOpacity
    onPress={()=>onPress()}
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
      <Button title="View" color="green" />
    </TouchableOpacity>
  );
};

export default BestOffers;
