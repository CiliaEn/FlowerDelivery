import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { handleSignIn, handleSignUp } from "../firebase/authManager";

export default function Profile() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const onPressSignIn = async () => {
    const err = await handleSignIn(email, password); // Await the function call
    setError(err); // Set error state
  };

  const onPressSignUp = async () => {
    const err = await handleSignUp(email, password); // Await the function call
    setError(err); // Set error state
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={{ borderWidth: 1, width: 200, marginVertical: 10, padding: 8 }}
      />
      <Button title="Sign In" onPress={onPressSignIn} />
      <Button title="Sign Up" onPress={onPressSignUp} />
      {error ? (
        <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>
      ) : null}
    </View>
  );
}
