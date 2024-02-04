import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Image,
} from "react-native";
import AddFotoOfPlace from "./CreatePost/AddFotoOfPlace";
import AddLocationOfPlace from "./CreatePost/AddLocationOfPlace";
import AddFotoIcon from "../images/Icons/addFotoIcon";
import LocationIcon from "../images/Icons/locationIcon";
import TrashIcon from "../images/Icons/trashIcon";
import BigButton from "./Buttons/BigButton";

const CreatePostScreen = () => {
  const [showAddFotoOfPlace, setShowAddFotoOfPlace] = useState(false);
  const [placeName, setPlaceName] = useState("");
  const [placeLocation, setPlaceLocation] = useState("");
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const handleAddFotoPress = () => {
    setShowAddFotoOfPlace(true);
  };
  const handlePhotoCapture = (photoUri, location) => {
    setCapturedPhoto(photoUri);
    setShowAddFotoOfPlace(false);
    setPlaceLocation(`Lat: ${location.latitude}, Long: ${location.longitude}`); // Оновлення локації
  };

  return (
    <View style={styles.container}>
      {!showAddFotoOfPlace ? (
        <>
          <View style={styles.addFotoIconContainer}>
            <TouchableWithoutFeedback onPress={handleAddFotoPress}>
              <View
                style={[
                  styles.fotoContainer,
                  capturedPhoto && styles.fotoContainerWithImage,
                ]}
              >
                {!capturedPhoto ? (
                  <View style={styles.fotoIconContainer}>
                    <AddFotoIcon style={styles.fotoIcon} />
                  </View>
                ) : (
                  <Image
                    source={{ uri: capturedPhoto }}
                    style={styles.fotoImage}
                  />
                )}
              </View>
            </TouchableWithoutFeedback>
            {!capturedPhoto ? (
              <Text style={styles.fotoContainerText}>Завантажте фото</Text>
            ) : (
              <Text style={styles.fotoContainerText}>Редагувати фото </Text>
            )}
          </View>
          <TextInput
            style={styles.input}
            onChangeText={setPlaceName}
            value={placeName}
            placeholder="Назва..."
          />
          <View style={styles.placeLocationContainer}>
            <TextInput
              style={styles.placeLocationInput}
              onChangeText={setPlaceLocation}
              value={placeLocation}
              placeholder="Місцевість..."
            />
            <View style={styles.iconContainer}>
              <LocationIcon style={styles.locationIcon} />
            </View>
          </View>
          <BigButton btnName="Опубліковати" />
        </>
      ) : (
        <AddFotoOfPlace onPhotoCapture={handlePhotoCapture} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  addFotoIconContainer: {
    marginBottom: 32,
  },
  fotoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    overflow: "hidden", // Важливий стиль, щоб вирізати рамки фото
  },
  fotoContainerWithImage: {
    backgroundColor: "transparent", // Якщо є зображення, фон стає прозорим
  },
  fotoIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  fotoIcon: {
    justifyContent: "center",
  },
  fotoImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  fotoContainerText: {
    color: "#BDBDBD",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  input: {
    width: "100%",
    paddingTop: 13,
    paddingBottom: 13,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  placeLocationInput: {
    position: "relative",
    width: "100%",
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 25,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  iconContainer: {
    position: "absolute",
    top: 16,
    left: 0,
  },
  locationIcon: {
    width: 20,
    height: 20,
  },
  placeLocationContainer: {
    marginBottom: 32,
  },
});

export default CreatePostScreen;
