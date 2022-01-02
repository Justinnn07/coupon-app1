import React, { useEffect, useState } from "react";
import Login from "./Screens/Login/Login";
import Store from "./Store/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigation from "./DrawerNav/DrawerNavigation";
import Register from "./Screens/Register/Register";
import NetInfo from "@react-native-community/netinfo";
import NoInternet from "./Screens/NoInternet/NoInternet";
import ForgotPassword from "./Screens/ForgotPassword/ForgotPassword";

const Stack = createNativeStackNavigator();

const App = () => {
  const [internet, setInternet] = useState(null);

  const fetchInternet = async () => {
    await NetInfo.fetch().then((state) => {
      setInternet(state.isConnected);
    });
  };
  useEffect(() => {
    fetchInternet();
  }, []);

  return (
    <>
      {internet ? (
        <NavigationContainer>
          <Provider store={Store}>
            <Stack.Navigator initialRouteName="login">
              <Stack.Screen
                name="login"
                options={{
                  headerShadowVisible: false,
                  headerTitle: "",
                }}
                component={Login}
              />
              <Stack.Screen
                name="home"
                options={{
                  headerShown: false,
                  headerShadowVisible: false,
                  headerTitle: "",
                }}
                component={DrawerNavigation}
              />
              <Stack.Screen
                name="register"
                options={{
                  headerShadowVisible: false,
                  headerTitle: "",
                }}
                component={Register}
              />
              <Stack.Screen
                name="forgotpassword"
                options={{
                  headerShadowVisible: false,
                  headerTitle: "",
                }}
                component={ForgotPassword}
              />
            </Stack.Navigator>
          </Provider>
        </NavigationContainer>
      ) : (
        <NoInternet />
      )}
    </>
  );
};

export default App;
