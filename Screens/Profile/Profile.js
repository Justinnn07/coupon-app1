import axios from "axios";
import React, { useState } from "react";
import { View, Text, Image, Pressable, Picker } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import person from "../../icons/person.png";

const Profile = () => {
  const state = useSelector((state) => state?.user);
  const [name, setName] = useState(state?.user?.name || state?.name);
  const [phone, setPhone] = useState(
    state?.user?.phone.toString() || state?.phone.toString()
  );
  const [email, setEmail] = useState(state?.user?.email || state?.email);
  const [city, setCity] = useState(state?.user?.city || state?.city);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.token);

  const update = () => {
    setLoading(true);
    axios
      .patch(
        "https://coupon-solicits-1.herokuapp.com/users/me",
        {
          name: name,
          city: city,
          email: email,
          phone: phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (res.data.name) {
          setLoading(false);
          alert("SUCCESSFULLY UPDATED!");
        } else {
          setLoading(false);
          alert("SOMETHING WENT WRONG!");
        }
      })
      .catch(() => {
        setLoading(false);
        alert("SOMETHING WENT WRONG!");
      });
  };

  const states = ["Delhi", "UP", "Maharashtra", "Kerala"];

  if (loading) {
    return <Spinner visible={loading} />;
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <Image source={person} style={{ width: 170, height: 170 }} />
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
            User Name
          </Text>
        </View>
        <View
          style={{
            margin: 20,
            borderWidth: 1,
            padding: 10,
            marginLeft: 10,
            borderRadius: 10,
          }}
        >
          <TextInput
            placeholder="Edit Name"
            placeholderTextColor="black"
            value={name}
            onChangeText={(e) => setName(e)}
          />
        </View>
        <View
          style={{
            margin: 20,
            borderWidth: 1,
            marginLeft: 10,
            marginTop: -1,
            borderRadius: 10,
          }}
        >
          <Picker
            selectedValue={city}
            style={{ height: 50, width: 370 }}
            onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
          >
            {states.map((res, index) => (
              <Picker.Item label={res} key={index} value={res} />
            ))}
          </Picker>
        </View>
        <View
          style={{
            margin: 20,
            borderWidth: 1,
            padding: 10,
            marginLeft: 10,
            borderRadius: 10,
            marginTop: -1,
          }}
        >
          <TextInput
            placeholder="Contact Number"
            placeholderTextColor="black"
            value={phone}
            keyboardType="number-pad"
            onChangeText={(e) => setPhone(e)}
          />
        </View>

        <View
          style={{
            margin: 20,
            borderWidth: 1,
            padding: 10,
            marginLeft: 10,
            borderRadius: 10,
            marginTop: -1,
          }}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor="black"
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Pressable
            style={{
              backgroundColor: "#00D100",
              padding: 15,
              width: 150,
              borderRadius: 10,
            }}
            onPress={update}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 17,
                textAlign: "center",
              }}
            >
              Update
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
