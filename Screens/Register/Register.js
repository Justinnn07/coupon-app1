import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import mail from "../../icons/1x/mail.png";
import lock from "../../icons/1x/lock.png";
import confirm from "../../icons/1x/password.png";
import phones from "../../icons/1x/phone.png";
import usernames from "../../icons/1x/username.png";
import logo from "../../icons/app-lo.png";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";
import config from "../../config/config";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  if (loading) {
    return <Spinner textContent="Loading.." visible={loading} />;
  }

  const register = async () => {
    setLoading(true);
    await axios
      .post(config.register_url, {
        name: name,
        email: email,
        password: password,
        phone: phone,
        confirmpassword: confirmPassword,
        city: "",
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Successfully registered!") {
          alert(res.data.message);
          navigation.replace("login");
          setConfirmPassword("");
          setEmail("");
          setName("");
          setPhone("");
        } else {
          alert(res.data.message || res.data.error);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: "center" }}>
        <Image source={logo} style={{ width: 160, height: 130 }} />
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 23,
          marginTop: 20,
          textAlign: "center",
        }}
      >
        Create New Account
      </Text>
      <ScrollView behavior="height" style={{ margin: 19 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "lightgray",
            padding: 5,
            borderRadius: 10,
            margin: 5,
          }}
        >
          <Image
            source={usernames}
            style={{
              height: 35,
              width: 40,
              margin: 3,
            }}
          />

          <TextInput
            placeholder="Full name"
            style={{ width: 300, marginLeft: 20 }}
            placeholderTextColor="black"
            value={name}
            onChangeText={(e) => setName(e)}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "lightgray",
            padding: 5,
            borderRadius: 10,
            marginTop: 10,
            margin: 5,
          }}
        >
          <Image
            source={mail}
            style={{
              width: 40,
              height: 35,
              borderRadius: 5,
              margin: 3,
            }}
          />

          <TextInput
            placeholder="Email"
            style={{ width: 300, marginLeft: 20 }}
            placeholderTextColor="black"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 5,
            backgroundColor: "lightgray",
            padding: 5,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Image
            source={lock}
            style={{
              borderRadius: 5,
              width: 35,
              height: 45,
              margin: 3,
            }}
          />

          <TextInput
            placeholder="Password"
            style={{ width: 300, marginLeft: 20 }}
            placeholderTextColor="black"
            value={password}
            secureTextEntry={true}
            onChangeText={(e) => setPassword(e)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "lightgray",
            padding: 5,
            margin: 5,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Image
            source={confirm}
            style={{
              height: 40,
              width: 45,
            }}
          />

          <TextInput
            placeholder="Confirm Password"
            style={{ width: 300, marginLeft: 20 }}
            placeholderTextColor="black"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={(e) => setConfirmPassword(e)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "lightgray",
            padding: 5,
            borderRadius: 10,
            margin: 5,
            marginTop: 10,
          }}
        >
          <Image
            source={phones}
            style={{
              width: 15,
              height: 40,
              marginLeft: 15,
            }}
          />
          <TextInput
            placeholder="Phone Number"
            style={{ width: 300, marginLeft: 35 }}
            placeholderTextColor="black"
            value={phone}
            keyboardType="number-pad"
            onChangeText={(e) => setPhone(e)}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={{
              marginTop: 20,
              padding: 10,
              backgroundColor: "green",
              width: 200,
              borderRadius: 20,
            }}
            onPress={() => {
              register();
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              Register
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
