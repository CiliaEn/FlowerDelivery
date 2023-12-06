import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import ListItem from "../components/listItem";
import { fetchStoresData } from "../firebase/firebaseManager";

export default function Search() {
  const [stores, setStores] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
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

  const filteredStores = stores.filter((store) =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      <FlatList
        data={filteredStores}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ListItem store={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 10,
    marginBottom: 10,
  },
});
