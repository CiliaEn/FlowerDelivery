import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { handleSignIn, handleSignUp } from "../../firebase/authManager";
import * as S from "./styled";
import { Spacer } from "../../components/core";

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
    <ImageBackground
      source={require("../../../assets/background.png")}
      style={{ flex: 1, height: "100%" }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(42, 11, 232, 0.01)",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Logga in</Text>
        <Spacer height={40} />
        <S.InputContainer>
          <Text style={{ fontWeight: "600" }}>Mejladress</Text>
          <S.TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </S.InputContainer>
        <S.InputContainer>
          <Text style={{ fontWeight: "600" }}>Lösenord</Text>
          <S.TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </S.InputContainer>
        <Spacer height={30} />
        <S.Button
          backgroundColor={"rgba(42, 11, 232, 0.6)"}
          onPress={onPressSignIn}
        >
          <Text style={{ color: "#fff" }}>Logga in</Text>
        </S.Button>
        <Spacer height={20} />
        <S.Button
          backgroundColor={"rgba(0, 0, 0, 0.11)"}
          onPress={onPressSignUp}
        >
          <Text style={{ color: "#fff" }}>Skapa konto</Text>
        </S.Button>
        {error ? (
          <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>
        ) : null}
      </View>
    </ImageBackground>
  );
}
