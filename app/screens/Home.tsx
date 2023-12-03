import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import ListItem from "../components/listItem";
import { fetchStoresData } from "../firebase/firebaseManager";

export default function Home() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const getStores = async () => {
      try {
        const fetchedStores = await fetchStoresData();
        setStores(fetchedStores);
      } catch (error) {
        console.error("Error fetching stores:", error);
      }
    };

    getStores();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {stores.map((store, index) => (
          <ListItem key={index} store={store}></ListItem>
        ))}
      </ScrollView>
    </View>
  );
}
