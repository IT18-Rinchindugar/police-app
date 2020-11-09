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
  height: 40px;
  margin-top: 14px;
  padding-horizontal: 14px;
  font-family: Montserrat-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  text-align: left;
`;
const NewsCard = () => {
  return (
    <CardContainer activeOpacity={0.7}>
      <CardImage
        source={{
          uri:
            "https://images.pexels.com/photos/4954715/pexels-photo-4954715.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        }}
      />
      <CardText>
        Монголчуудын шар айрагны хэрэглээ дэлхийд эхний 10 - т бичигдэ байна...
      </CardText>
    </CardContainer>
  );
};

export default NewsCard;
