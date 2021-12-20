import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import appLogo from "../../icons/app-lo.png";
import Spinner from "react-native-loading-spinner-overlay";
import { useDispatch } from "react-redux";

const Login = ({ navigation }) => {
  // states..
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPrev();
    return () => {
      setLoading(false);
    };
  }, []);
  // Loading logged in user.. if exist
  const getPrev = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      setLoading(true);
      dispatch({
        type: "SET_TOKEN",
        token: token,
      });
      axios
        .get("https://coupon-solicits-1.herokuapp.com/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.data.name) {
            dispatch({
              type: "SET_USER",
              user: res.data,
            });
            navigation.replace("home");
          } else {
            setLoading(false);
          }
        })
        .catch((err) => {
          alert("Something went wrong!");
        })

        .finally(() => setLoading(false));
    }
  };

  // Login handler...
  const login = async () => {
    if (email && password) {
      setLoading(true);
      await axios
        .post("https://coupon-solicits-1.herokuapp.com/users/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.user) {
            dispatch({
              type: "SET_TOKEN",
              token: res.data.token,
            });
            dispatch({
              type: "SET_USER",
              user: res.data.user,
            });
            AsyncStorage.setItem("token", res.data.token);
            navigation.replace("home");
            setEmail("");
            setPassword("");
          } else {
            setLoading(false);
          }
        })
        .catch(() => {
          alert("Email/Password is incorrect");
          setLoading(false);
        })
        .then(() => {
          setLoading(false);
        });
    } else {
      alert("PLEASE ENTER EMAIL AND PASSWORD");
    }
  };

  // loader..
  if (loading) {
    return <Spinner textContent="Loading..." visible={loading} />;
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: "center" }}>
        <Image source={appLogo} style={{ width: 182, height: 150 }} />
      </View>
      <View style={{ margin: 60 }}>
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>Welcome!</Text>
        <View>
          <TextInput
            placeholder="Email..."
            style={{ padding: 10, borderBottomWidth: 0.3 }}
            placeholderTextColor="black"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput
            placeholder="Password..."
            style={{ padding: 10, borderBottomWidth: 0.3, marginTop: 20 }}
            placeholderTextColor="black"
            secureTextEntry={true}
            value={password}
            onChangeText={(e) => setPassword(e)}
          />

          <Pressable
            style={{
              padding: 10,
              alignItems: "center",
              backgroundColor: "green",
              borderRadius: 20,
              marginTop: 30,
            }}
            onPress={login}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>LOG IN</Text>
          </Pressable>
          <Text style={{ padding: 10, textAlign: "center", fontWeight: "600" }}>
            Forgot Password?
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text>Don't have an account?</Text>
        <Pressable
          style={{
            padding: 10,
            alignItems: "center",
            backgroundColor: "green",
            borderRadius: 20,
            width: 150,
            marginTop: 5,
          }}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Sign Up</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Login;
