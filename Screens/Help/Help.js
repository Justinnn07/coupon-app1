import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import logo from "../../icons/helpss.png";

const Help = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: "center" }}>
        <Image source={logo} style={{ width: 350, height: 300 }} />
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            alignItems: "center",
            width: 200,
            padding: 15,
            borderRadius: 10,
            marginTop: 70,
          }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Help
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Help;
