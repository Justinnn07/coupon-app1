import React, { useState } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import logo from "../icons/app-logo.png";
import data from "../data/data";
import { ScrollView } from "react-native-gesture-handler";
import logout from "../icons/logout.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Sidebar = ({ navigation }) => {
  const signout = async () => {
    await AsyncStorage.removeItem("token").then(() => {
      navigation.replace("login");
    });
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Image source={logo} style={styles.sideMenuProfileIcon} />
      {data.map(({ icon, text, route }, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate(route);
            navigation.closeDrawer();
          }}
        >
          <View style={styles.customItem}>
            <Image source={icon} style={styles.iconStyle} />
            <Text style={{ marginLeft: 5 }}>{text}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <TouchableOpacity onPress={signout}>
        <View style={styles.customItem}>
          <Image source={logout} style={styles.iconStyle} />
          <Text style={{ marginLeft: 5 }}>Logout</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 240,
    height: 150,
    borderRadius: 100 / 2,
    alignSelf: "center",
    marginLeft: -30,
  },
  iconStyle: {
    width: 30,
    height: 30,
    margin: 4,
  },
  customItem: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
    borderWidth: 1,
    padding: 5,
  },
});

export default Sidebar;
