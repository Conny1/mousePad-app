import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#030303" },
        tabBarIcon: ({ focused }) => {
          let iconName: "home" = "home";
          let underline = focused
            ? { borderBottomWidth: 2, borderBottomColor: "#1e90ff" }
            : {};

          if (route.name === "home") {
            iconName = "home";
          }

          return (
            <View style={[{ alignItems: "center" }, underline]}>
              <Ionicons name={iconName} size={24} color="#fff" />
            </View>
          );
        },
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen name="home" />
    </Tabs>
  );
}
