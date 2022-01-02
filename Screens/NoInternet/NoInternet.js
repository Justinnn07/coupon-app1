import React, { Component } from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import owl from "../../icons/1x/owl.png";

export default class NoInternet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastRefresh: Date(Date.now()).toString(),
    };
    this.refreshScreen = this.refreshScreen.bind(this);
  }

  refreshScreen() {
    this.setState({ lastRefresh: Date(Date.now()).toString() });
  }
  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}
      >
        <View style={{ alignItems: "center" }}>
          <Image source={owl} style={{ width: 230, height: 250 }} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 22, fontWeight: "bold", margin: 20 }}>
            No Connection
          </Text>
          <Text
            style={{ fontSize: 20, alignItems: "center", textAlign: "center" }}
          >
            No internet connection found, please check your connection or try
            again!
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "#00D100",
              padding: 15,
              width: 240,
              borderRadius: 10,
              margin: 20,
            }}
            onPress={this.refreshScreen}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
              TRY AGAIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
