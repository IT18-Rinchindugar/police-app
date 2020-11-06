import React from "react";
import Header from "../../components/Header";
import styled from "styled-components/native";
import { PoliceColors } from "../../styles";
import NewsCard from "../../components/NewsCard";
const { Alabaster } = PoliceColors;
const NewsContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const Container = styled.View`
  flex: 1;
  background-color: ${Alabaster};
  margin-horizontal: 14px;
`;

const VerticalScroll = styled.ScrollView``;

const NewsScreen = () => {
  return (
    <NewsContainer>
      <Header title="Архины хэрэглээ, үзүүлэлт" />
      <Container>
        <VerticalScroll showsVerticalScrollIndicator={false}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </VerticalScroll>
      </Container>
    </NewsContainer>
  );
};

export default NewsScreen;
