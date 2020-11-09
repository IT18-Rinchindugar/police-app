import React, { useState } from "react";
import styled from "styled-components/native";

const InputView = styled.View`
  width: 100%;
  height: 60px;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  padding-horizontal: 20px;
  margin-top: 10px;
`;

const InputText = styled.TextInput`
  height: 20px;
  width: 30px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #5e72e4;
`;
const InputTextDefault = styled.Text`
  margin-left: 1px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: #5e72e4;
  text-transform: uppercase;
`;
const FormInput = (props) => {
  const [text, useText] = useState("");
  const { title, setAge } = props;
  return (
    <InputView>
      <InputText
        keyboardType="numeric"
        returnKeyType="next"
        placeholder="0"
        placeholderTextColor="#5e72e4"
        onChangeText={(text) => setAge(text)}
      />
      <InputTextDefault>{title}</InputTextDefault>
    </InputView>
  );
};

export default FormInput;
