import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.main}>
      <View>
        <Text>Connect with:</Text>
        <View>
          <Link style={styles.linkBtn} href="/bluetooth">
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Bluetooth{" "}
            </Text>
          </Link>
        </View>
      </View>

      <View>
        <Text>Open:</Text>
        <Link style={styles.linkBtn} href="/mousepad">
          <Text style={{ color: "#fff", textAlign: "center" }}>Mouse pad</Text>
        </Link>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 10,
    gap: 10,
  },
  linkBtn: {
    backgroundColor: "#030303",
    width: "40%",
    padding: 5,
    borderRadius: 5,
  },
});
