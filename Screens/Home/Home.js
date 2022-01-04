import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import MenuData from "../../data/MenuData";
import filter from "../../icons/edit.png";
import * as Location from "expo-location";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";
import TopHotels from "../../components/TopHotels";
import BestOffers from "../../components/BestOffers";
import config from "../../config/config";

const Home = ({ navigation }) => {
  const [hotel, setHotel] = useState([]);
  const [advert, setAdvert] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useSelector((state) => state.location);
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const getLocation = async () => {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    if (location) {
      await axios
        .get(
          config.locationApi_url +
            `${location.coords.latitude},${location.coords.longitude}`
        )
        .then((res) => {
          dispatch({
            type: "SET_LOCATION",
            location: res.data.data[0],
          });
        })
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    axios
      .get(config.hotel_url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setHotel(res.data);
      });

    axios
      .get(config.advert_url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setAdvert(res.data));
    return () => {
      setLoading(false);
    };
  }, []);

  if (loading) {
    return <Spinner visible={loading} textContent="Loading..." />;
  }
  return (
    <ScrollView style={{ backgroundColor: "white", paddingTop: 20 }}>
      {/* Menu Options */}
      {location.region ? (
        <Text
          style={{
            textAlign: "center",
            marginBottom: 20,
            fontSize: 15,
            fontWeight: "bold",
            color: "red",
          }}
        >
          Location: {location?.county}, {location?.country}
        </Text>
      ) : (
        <TouchableOpacity onPress={getLocation}>
          <Text
            style={{
              textAlign: "center",
              marginBottom: 20,
              fontSize: 18,
              fontWeight: "bold",
              color: "red",
            }}
          >
            Get Location
          </Text>
        </TouchableOpacity>
      )}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {MenuData.map(({ title, subTitle, background, icon }, index) => (
          <ScrollView key={index}>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ImageBackground source={background} style={{ width: 100 }}>
                <View
                  style={{
                    padding: 20,
                  }}
                >
                  <Image
                    source={icon}
                    style={{
                      width: 20,
                      height: 20,
                      marginLeft: 20,
                    }}
                  />
                </View>
              </ImageBackground>

              <Text style={{ fontWeight: "800" }}>{title}</Text>
              <Text>{subTitle}</Text>
            </View>
          </ScrollView>
        ))}
      </View>

      {/* Top Hotels */}
      <View style={{ margin: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 23 }}>Top Hotels</Text>
          <TouchableOpacity>
            <Image
              source={filter}
              style={{ width: 30, height: 30, margin: 10 }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row" }}>
            {hotel?.map((res, index) => (
              <TopHotels
                onPress={() => navigation.navigate("advertinfo", res)}
                uri={res.hotel}
                key={index}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      {/* Food Offers */}
      <View style={{ margin: 15, marginTop: -17 }}>
        <Text style={{ fontWeight: "bold", fontSize: 23 }}>Advertise</Text>
        <ScrollView
          horizontal={true}
          style={{
            marginTop: 10,
          }}
        >
          {advert.map((res, index) => (
            <BestOffers
              key={index}
              dishImage={res.image}
              dishName={res.description}
              dishRate={res.rate}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Home;
