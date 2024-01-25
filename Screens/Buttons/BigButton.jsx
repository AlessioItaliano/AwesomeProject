import { TouchableOpacity, Text, StyleSheet } from "react-native";

const BigButton = ({ btnName, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{btnName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginBottom: 16,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: 24,
  },
});

export default BigButton;
