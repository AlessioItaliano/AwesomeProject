import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";

import AddFotoOfPlace from "./CreatePost/AddFotoOfPlace";
import AddLocationOfPlace from "./CreatePost/AddLocationOfPlace";

import AddFotoIcon from "../images/Icons/addFotoIcon";
import LocationIcon from "../images/Icons/locationIcon";
import TrashIcon from "../images/Icons/trashIcon";

const CreatePostScreen = () => {
  const [showAddFotoOfPlace, setShowAddFotoOfPlace] = useState(false);

  const handleAddFotoPress = () => {
    // Ваш код для обробки натискання на кнопку
    setShowAddFotoOfPlace(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addFotoIconContainer}>
        <TouchableWithoutFeedback onPress={handleAddFotoPress}>
          <View style={styles.fotoContainer}>
            <View style={styles.fotoIconContainer}>
              <AddFotoIcon style={styles.fotoIcon} />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.fotoContainerText}>Завантажте фото</Text>
      </View>
      {showAddFotoOfPlace && <AddFotoOfPlace />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  addFotoIconContainer: {
    marginBottom: 8,
  },
  fotoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 343,
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
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
  fotoContainerText: {
    color: "#BDBDBD",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
});

export default CreatePostScreen;
