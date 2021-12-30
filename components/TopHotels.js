import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const TopHotels = ({ uri, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginLeft: -10 }}>
      <Image
        source={{
          uri: uri,
        }}
        style={{ width: 270, margin: 10, height: 150, borderRadius: 20 }}
      />
    </TouchableOpacity>
  );
};

export default TopHotels;
