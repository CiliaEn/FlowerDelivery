export type User = {
  name: String;
  phoneNumber: String;
  email: String;
  orders: [Order];
  //activeOrder : Order
};

export type Order = {
  store: Store;
  bouquets: [Bouquet];
  orderDate: String;
};

export type Store = {
  name: String;
  deliveryFee: number;
  deliveryTime: String;
  image: String;
  bouquets: [Bouquet];
  latitude: number;
  longitude: number;
  score: String;
};

export type Bouquet = {
  name: String;
  price: number;
  imageUrl: String;
};
