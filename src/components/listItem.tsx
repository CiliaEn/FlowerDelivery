import React from "react";
import { Store } from "../types"; // Import the Store type
import { View, Text } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { StyleSheet } from "react-native";

type ListItemProps = {
  store: Store;
};

export default function ListItem({ store }) {
  return (
    <View style={styles.container}>
      <Text style={styles.storeName}>{store.name}</Text>
      <Text style={styles.deliveryInfo}>
        Delivery Fee: ${store.deliveryFee}
      </Text>
      <Text style={styles.deliveryInfo}>
        Delivery Time: {store.deliveryTime}
      </Text>
      <Text style={styles.score}>Score: {store.score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "lightgray",
  },
  storeName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  deliveryInfo: {
    fontSize: 14,
    color: "gray",
    marginBottom: 3,
  },
  score: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
});
