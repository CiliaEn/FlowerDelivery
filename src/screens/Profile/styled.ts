import styled from "styled-components/native";
import { Platform } from "react-native";

export const TextInput = styled.TextInput`
  ${Platform.OS === "ios"
    ? `
  shadow-color: #000;
  shadow-offset: 0px 10px;
  shadow-opacity: 0.15;
  shadow-radius: 20px;
`
    : `
  elevation: 5;
`}
  background-color: #fff;
  border-radius: 20px;
  width: 300px;
  height: 40px;
  margin-vertical: 10px;
  padding: 8px;
`;

export const Button = styled.View`
  width: 200px;
  height: 30px;

  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.View`
  align-items: trailing;
`;
