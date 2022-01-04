import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import config from "../../config/config";

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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Please Enter Your Email
        </Text>
        <TextInput
          placeholder="Type Your email"
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
        <Button title="Send" onPress={sendMail} />
      </View>
    </View>
  );
};

export default ForgotPassword;
