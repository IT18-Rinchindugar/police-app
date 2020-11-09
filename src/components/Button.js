import React from "react";
import styled from "styled-components/native";
import Icon from "@expo/vector-icons/Feather";

const ButtonContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-horizontal: 20px;
`;
const ButtonIcon = styled.View`
  width: 20px;
`;
const ButtonTitle = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

const Button = (props) => {
  const { icon, title, onPress } = props;
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonIcon />
      <ButtonTitle>{title}</ButtonTitle>
      <Icon name={icon} size={25} color="#fff" />
    </ButtonContainer>
  );
};

export default Button;
