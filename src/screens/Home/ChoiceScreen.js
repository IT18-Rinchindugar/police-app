import React from "react";
import logo from '../../../assets/logo.png';
import styled from "styled-components/native";
import MenuList from "../../components/MenuList";
import { PoliceColors } from "../../styles";
const { Alabaster } = PoliceColors;

const data = [
  {
    id: 1,
    title: "Архины хэрэглээ, үзүүлэлт",
    navigateTo: "News",
    type: "news",
  },
  { 
    id: 2, 
    title: "Гэмт хэрэг ", 
    navigateTo: "News", 
    type: "monnews" 
  },
  {
    id: 3,
    title: "Архины сөрөг нөлөө",
    navigateTo: "News",
    type: "healthnews",
  },
/*  {
    id: 4,
    title: "Зөв зохистой хэрэглээ",
    navigateTo: "Health",
    type: "health",
  }, */
  {
    id: 5,
    title: "Зөв зохистой хэрэглээ",
    navigateTo: "Other",
    type: "other",
  },
];

const MainContainer = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background-color: ${Alabaster};
`;
const Container = styled.View`
  flex: 1;
  margin-horizontal: 14px;
  justify-content: center;
  align-items: center;
`;
const LogoContainer = styled.View`
  flex: 0.3;
  justify-content: center;
  align-items: center;
`;
const LogoImage = styled.Image`
  margin-top: 25%;
  width: 280px;
`;
const ChoiceScreen = (props) => {
  const { navigation } = props;
  return (
    <MainContainer>
      <LogoContainer>
        <LogoImage
          source={logo}
          resizeMode="contain"
        />
      </LogoContainer>
      <Container>
        {data.map(({ title, id, navigateTo, type }) => (
          <MenuList
            key={id}
            title={title}
            onPress={() => navigation.navigate(navigateTo, { title, type })}
          />
        ))}
      </Container>
    </MainContainer>
  );
};

export default ChoiceScreen;
