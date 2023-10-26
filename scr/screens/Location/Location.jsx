import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import styles from "./locationStyles";
import MapPreview from "../../Components/MapPreview/MapPreview";

const LocationScreen = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError(
          "Los permisos para acceder a la localización fueron denegados"
        );
      } else {
        let locationData = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: locationData?.coords.latitude,
          longitude: locationData?.coords.longitude,
        });
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>MI LOCALIZACIÓN:</Text>
      {location.latitude && location.longitude ? (
        <>
          <View>
            <Text style={styles.text}>
              Lat: {location.latitude}, Longitud: {location.longitude}
            </Text>
          </View>
          <View style={styles.withoutLocation}>
            <MapPreview location={location} />
          </View>
        </>
      ) : (
        <View style={styles.withoutLocation}>
          <Text>{error}</Text>
        </View>
      )}
    </View>
  );
};

export default LocationScreen;
