import React from "react";
import { Image, Text, View, Share } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import main from "../../icons/1x/main.png";
import fb from "../../icons/1x/fb.png";
import whatsapp from "../../icons/1x/whatsapp.png";
import tweet from "../../icons/1x/tweet.png";
import insta from "../../icons/1x/insta.png";
import gmail from "../../icons/1x/gmail.png";
import clip from "../../icons/1x/clip.png";
import share from "../../icons/1x/share.png";
import invite from "../../icons/1x/invite.png";
import { useSelector } from "react-redux";

const ReferAFriend = () => {
  const state = useSelector((state) => state);
  console.log(state);
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `HEY, JOIN MY APP TO GET FREE COUPONS ${state}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          alignItems: "center",
          padding: 10,
          elevation: 5,
          margin: 15,
        }}
      >
        <Image source={main} style={{ width: 300, height: 200 }} />
        <View style={{ margin: 20 }}>
          <Text
            style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}
          >
            Invite Your Friends and get {"\n"} bonus Points!
          </Text>
          <Text
            style={{
              color: "lightgray",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Share your code and your friends {"\n"} and get exciting bonus
            points {"\n"} or
          </Text>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={onShare}>
              <Image source={invite} style={{ width: 160, height: 30 }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginTop: -10, margin: 20 }}>
        <Text>Share</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={onShare}>
            <Image source={fb} style={{ width: 90, height: 90 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <Image source={whatsapp} style={{ width: 90, height: 90 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <Image source={tweet} style={{ width: 90, height: 90 }} />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={onShare}>
            <Image source={insta} style={{ width: 90, height: 90 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <Image source={gmail} style={{ width: 90, height: 90 }} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <Image source={clip} style={{ width: 90, height: 90 }} />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <TouchableOpacity onPress={onShare}>
            <Image source={share} style={{ width: 160, height: 30 }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ReferAFriend;
