import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import AdvertInfo from "../Screens/AdvertInfo/AdvertInfo";
import ChangePassword from "../Screens/ChangePassword/ChangePassword";
import Help from "../Screens/Help/Help";
import Home from "../Screens/Home/Home";
import Profile from "../Screens/Profile/Profile";
import ReferAFriend from "../Screens/ReferAFriend/ReferAFriend";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const state = useSelector((state) => state.user);
  return (
    <Drawer.Navigator drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerTitle: () => (
            <View style={{ marginTop: -10 }}>
              <Text
                style={{
                  fontSize: 17,
                  color: "lightgray",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                Hi, {state?.name || state?.user?.name}
              </Text>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                Find Deals
              </Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        component={Profile}
        name="profile"
        options={{ headerShadowVisible: false, headerTitle: "Profile" }}
      />
      <Drawer.Screen
        component={ChangePassword}
        name="ChangePassword"
        options={{ headerShadowVisible: false, headerTitle: "" }}
      />
      <Drawer.Screen
        component={Help}
        name="help"
        options={{ headerShadowVisible: false, headerTitle: "" }}
      />
      <Drawer.Screen
        component={ReferAFriend}
        name="refer"
        options={{ headerShadowVisible: false, headerTitle: "" }}
      />
      <Drawer.Screen
        component={AdvertInfo}
        name="advertinfo"
        options={{ headerShadowVisible: false, headerTitle: "" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

