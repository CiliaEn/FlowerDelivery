import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  DocumentData,
  addDoc,
} from "firebase/firestore";
import { Store } from "../types";
import mockStores from "../mockData/mockStores";
import { firebaseConfig } from "./firebaseConfig";

const initializeFirebase = () => {
  const app = initializeApp(firebaseConfig);
  return getFirestore(app);
};

const fetchStoresData = async (): Promise<Store[]> => {
  const db = initializeFirebase();
  const storesData: Store[] = [];

  try {
    const querySnapshot = await getDocs(collection(db, "stores"));
    querySnapshot.forEach((doc) => {
      const storeData: DocumentData = doc.data();
      const store: Store = {
        name: storeData.name || "",
        deliveryFee: storeData.deliveryFee || 0,
        deliveryTime: storeData.deliveryTime || "",
        image: storeData.image || "",
        bouquets: storeData.bouquets || [],
        latitude: storeData.latitude || 0,
        longitude: storeData.longitude || 0,
        score: storeData.score || "",
      };
      storesData.push(store);
    });
  } catch (error) {
    console.error("Error fetching stores:", error);
  }

  return storesData;
};

const addStoresToFirestore = async () => {
  const db = initializeFirebase();

  try {
    const storesCollection = collection(db, "stores");

    for (const store of mockStores) {
      await addDoc(storesCollection, store);
      console.log(`Store '${store.name}' added to Firestore.`);
    }

    console.log("All stores added to Firestore successfully!");
  } catch (error) {
    console.error("Error adding stores to Firestore:", error);
  }
};

export { initializeFirebase, fetchStoresData, addStoresToFirestore };
