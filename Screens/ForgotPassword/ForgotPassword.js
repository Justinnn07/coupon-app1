import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Spinner from "react-native-loading-spinner-overlay";
import config from "../../config/config";
import appLogo from "../../icons/app-lo.png";
const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const sendMail = async () => {
    setLoading(true);
    await axios
      .put(config.forgotPassword_url, {
        email: email,
      })
      .then((res) => {
        alert(res.data.message || res.data.error);
      })
      .finally(() => setLoading(false));
    setEmail("");
  };

  if (loading) {
    return <Spinner visible={loading} textContent="Loading..." />;
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: "center" }}>
        <Image source={appLogo} style={{ width: 182, height: 150 }} />
      </View>
      <View style={{ margin: 60 }}>
        <View>
          <TextInput
            placeholder="Email..."
            style={{ padding: 10, borderBottomWidth: 1 }}
            placeholderTextColor="black"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <TouchableOpacity
            style={{
              padding: 10,
              alignItems: "center",
              backgroundColor: "green",
              borderRadius: 20,
              marginTop: 30,
            }}
            onPress={sendMail}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Send Mail
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
