import React from "react";
import image from '../../../assets/other.jpg';
import Header from "../../components/Header";
import styled from "styled-components/native";
import { PoliceColors } from "../../styles";
const { Alabaster } = PoliceColors;

const NewsContainer = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background-color: ${Alabaster};
`;

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const Image = styled.Image`
  width: 100%;
`;
const NewsListScreen = ({ route, navigation }) => {
  const { title } = route.params;
  return (
    <NewsContainer>
      <Header title={title} navigation={navigation} />
      <Container >
        <Image source={image} resizeMode="contain" />
      </Container>
    </NewsContainer>
  );
};

export default NewsListScreen;
