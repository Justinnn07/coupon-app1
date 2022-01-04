import axios from "axios";
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay";
import { useSelector } from "react-redux";
import config from "../../config/config";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const state = useSelector((state) => state.token);
  const user = useSelector((state) => state.user);
  const change = () => {
    if (password === confPassword) {
      setLoading(true);
      axios
        .patch(
          config.changePassword_url,
          {
            password: password,
          },
          {
            headers: {
              Authorization: `Bearer ${state || user.token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data.message);
          if (res.data.name) {
            alert(res.data.message);
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => alert(err.message))
        .finally(() => setLoading(false));
      setPassword("");
      setConfPassword("");
    } else {
      alert("Password's do not match!");
    }
  };

  if (loading) {
    return <Spinner visible={loading} textContent="Loading..." />;
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ margin: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 23 }}>
          Change Password
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 15 }}> New Password</Text>
          <TextInput
            value={password}
            onChangeText={(e) => setPassword(e)}
            placeholder="New Password"
            placeholderTextColor="black"
            style={{
              backgroundColor: "lightgray",
              borderRadius: 10,
              padding: 10,
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 15 }}>Confirm Password</Text>
          <TextInput
            placeholder="Confirm Password"
            value={confPassword}
            onChangeText={(e) => setConfPassword(e)}
            placeholderTextColor="black"
            style={{
              backgroundColor: "lightgray",
              borderRadius: 10,
              padding: 10,
            }}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Pressable
          style={{
            alignItems: "center",
            backgroundColor: "#00D100",
            padding: 10,
            width: 240,
            borderRadius: 10,
          }}
        >
          <Text
            style={{ fontSize: 15, fontWeight: "bold", color: "white" }}
            onPress={change}
          >
            RESET PASSWORD
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ChangePassword;
