import React from "react";
import Header from "../../components/Header";
import styled from "styled-components/native";
import MenuList from "../../components/MenuList";
import { PoliceColors } from "../../styles";
const { Alabaster } = PoliceColors;

const data = [
  { id: 1, title: "Архины хэрэглээ, үзүүлэлт", navigateTo: "News" },
  { id: 2, title: "Гэмт хэрэг ", navigateTo: "News" },
  { id: 3, title: "Архины сөрөг нөлөө", navigateTo: "News" },
  { id: 4, title: "Зөв зохистой хэрэглээ", navigateTo: "Health" },
];

const MainContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;
const Container = styled.View`
  flex: 1;
  background-color: ${Alabaster};
  margin-horizontal: 14px;
  justify-content: center;
  align-items: center;
`;
const ChoiceScreen = (props) => {
  const { navigation } = props;
  return (
    <MainContainer>
      <Header />
      <Container>
        {data.map(({ title, id, navigateTo }) => (
          <MenuList
            key={id}
            title={title}
            onPress={() => navigation.navigate(navigateTo)}
          />
        ))}
      </Container>
    </MainContainer>
  );
};

export default ChoiceScreen;
