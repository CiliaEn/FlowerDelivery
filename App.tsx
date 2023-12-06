import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./src/screens/Home";
import Profile from "./src/screens/Profile/Profile";
import Search from "./src/screens/Search";
import { useEffect } from "react";
import { fetchStoresData } from "./src/firebase/firebaseManager";

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    const fetchStoresAndLogNames = async () => {
      const stores = await fetchStoresData();
      stores.forEach((store) => {
        console.log(store.name);
      });
    };
    fetchStoresAndLogNames();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "rgba(42, 11, 232, 1)",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
