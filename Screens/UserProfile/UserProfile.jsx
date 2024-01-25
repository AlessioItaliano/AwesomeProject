import { View, Text, Image, StyleSheet } from "react-native";

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.userAvatar} />
      <View>
        <Text style={styles.userName}>Name</Text>
        <Text style={styles.userEmail}>Email</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  userAvatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "green",
  },
  userName: {
    color: "#212121",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: "700",
  },
  userEmail: {
    color: "rgba(33, 33, 33, 0.80)",
    fontSize: 11,
    fontStyle: "normal",
    fontWeight: "400",
  },
});

export default UserProfile;
