import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from "react-native";

const AdvertInfo = () => {
  const [show, setShow] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();

  console.log(navigation.getState().type);

  useEffect(() => {
    // if (navigation.getState()) {
    //   setShow(false);
    // }
  }, []);

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
          Get.. {route.params.discount} on {route.params.desc}
        </Text>
        <Text style={{ fontSize: 25, margin: 5 }}>
          Maximum discount.. {route.params.discount}
        </Text>
        <Text style={{ fontSize: 25, margin: 5 }}>
          Valid Till.. {route.params.endDate}
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity onPress={() => Linking.openURL("https://google.com")}>
          <Image
            source={{
              uri: "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png",
            }}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://google.com")}>
          <Image
            source={{
              uri: "https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png",
            }}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL("https://google.com")}>
          <Image
            source={{
              uri: "https://i.pinimg.com/originals/73/59/a8/7359a8e49a6fadcc653bd947f91df724.jpg",
            }}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </View>
      {show ? (
        <Text
          style={{
            fontSize: 20,
            color: "black",
            margin: 20,
            backgroundColor: "#FFE162",
            padding: 10,
          }}
        >
          {route.params.coupon_code}
        </Text>
      ) : (
        <TouchableOpacity
          style={{
            margin: 10,
            backgroundColor: "#FFE162",
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() => setShow(true)}
        >
          <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
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
    borderColor: "#DA1212",
    margin: 10,
    borderRadius: 10,
  },
});
