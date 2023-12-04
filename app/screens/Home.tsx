import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
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
    <View
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
      }}
    >
      <FlatList
        data={stores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ListItem store={item} />}
      />
    </View>
  );
}
