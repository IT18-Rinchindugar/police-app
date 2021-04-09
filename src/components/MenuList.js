import React from "react";
import styled from "styled-components/native";
import Icon from "@expo/vector-icons/Feather";
import PropTypes from "prop-types";

const ListContainer = styled.TouchableOpacity`
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #5e72e4;
  padding-left: 16px;
  padding-right: 8px;
  border-radius: 8px;
  margin-bottom: 14px;
`;

const ListText = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`;

const MenuList = (props) => {
  const { title, onPress } = props;
  return (
    <ListContainer onPress={onPress}>
      <ListText>{title}</ListText>
      <Icon color="#fff" size={25} name="chevron-right" />
    </ListContainer>
  );
};

MenuList.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default MenuList;
