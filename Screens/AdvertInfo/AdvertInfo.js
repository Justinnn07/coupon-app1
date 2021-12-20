import { useRoute } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const AdvertInfo = () => {
  const [show, setShow] = useState(false);
  const route = useRoute();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={{ color: "red", fontSize: 17 }}>
          {route.params.discount} Off
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 25 }}>
          Flat {route.params.discount} Off on {route.params.desc} Via ICIC Bank
          Credit Cards
        </Text>
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 25, margin: 5 }}>
          > Get.. {route.params.discount} on {route.params.desc}
        </Text>
        <Text style={{ fontSize: 25, margin: 5 }}>
          > Maximum discount.. {route.params.discount}
        </Text>
        <Text style={{ fontSize: 25, margin: 5 }}>
          {" "}
          > Valid Till.. {route.params.endDate}
        </Text>
      </View>

      {show ? (
        <Text
          style={{
            fontSize: 20,
            color: "black",
            margin: 20,
            backgroundColor: "red",
            padding: 10,
            color: "white",
          }}
        >
          {route.params.coupon_code}
        </Text>
      ) : (
        <TouchableOpacity
          style={{
            margin: 10,
            backgroundColor: "red",
            padding: 10,
          }}
          onPress={() => setShow(true)}
        >
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            SHOW COUPON CODE
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default AdvertInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  innerContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: "red",
    margin: 10,
    borderRadius: 10,
  },
});
