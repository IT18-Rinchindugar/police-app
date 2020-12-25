import React from "react";
import styled from "styled-components/native";

const CardContainer = styled.TouchableOpacity`
  flex-direction: column;
  margin-vertical: 8px;
  height: 267px;
  background-color: #fff;
  border-radius: 6px;
`;
const CardImage = styled.Image`
  height: 195px;
  background-color: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;
const CardText = styled.Text`
  height: 37px;
  margin-top: 14px;
  padding-horizontal: 14px;
  font-family: Montserrat-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;
const NewsCard = (props) => {
  const { onPress, title, photo } = props;
  return (
    <CardContainer activeOpacity={0.7} onPress={onPress}>
      <CardImage
        source={{
          uri: `http://202.70.34.25:3001/uploads/${photo}`,
        }}
        resizeMode="cover"
      />
      <CardText>{title}</CardText>
    </CardContainer>
  );
};

export default NewsCard;
