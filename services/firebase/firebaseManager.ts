/* import firebase from 'firebase/app';
import 'firebase/firestore';
import { useEffect, useState } from 'react';

// Define your Store type if it's different from the Swift Store model
interface Store {
  // Define your Store properties here
}

const useFirestoreListener = () => {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    const db = firebase;

    const unsubscribe = db.collection('stores').onSnapshot((snapshot) => {
      const updatedStores: Store[] = [];
      snapshot.forEach((doc) => {
        const storeData = doc.data() as Store | undefined;
        if (storeData) {
          updatedStores.push(storeData);
        }
      });
      setStores(updatedStores);
    });

    return () => {
      // Clean up the listener when component unmounts
      unsubscribe();
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return stores;
};

export default useFirestoreListener; */
