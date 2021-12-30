import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const sendMail = async () => {
    await axios
      .put("https://coupon-solicits-1.herokuapp.com/users/forgotPassword", {
        email: email,
      })
      .then((res) => console.log(res.data));

    setEmail("");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>
          Please Enter Your Email
        </Text>
        <TextInput
          placeholder="Type Your email"
          value={email}
          onChange={(e) => setEmail(e)}
        />
        <Button title="Send" onPress={sendMail} />
      </View>
    </View>
  );
};

export default ForgotPassword;
