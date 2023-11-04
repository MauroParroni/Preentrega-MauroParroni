import { View, Text, Image } from "react-native";
import React from "react";
import { googleApi } from "../../firebase";
import styles from "./mapPreviewStyles";

const MapPreview = ({ location }) => {
  const { latitude, longitude } = location;
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:User%7C${latitude},${longitude}&key=${googleApi.mapStatic}`;
  return (
    <View style={styles.mapPreview}>
      <Image style={styles.mapImage} source={{ uri: mapPreviewUrl }} />
    </View>
  );
};

export default MapPreview;

