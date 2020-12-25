import React from "react";
import Header from "../../components/Header";
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
  { id: 2, title: "Гэмт хэрэг ", navigateTo: "News", type: "monnews" },
  {
    id: 3,
    title: "Архины сөрөг нөлөө",
    navigateTo: "News",
    type: "healthnews",
  },
  {
    id: 4,
    title: "Зөв зохистой хэрэглээ",
    navigateTo: "Health",
    type: "health",
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;
const LogoImage = styled.Image`
  height: 140px;
  width: 110px;
`;
const LogoTitle = styled.Text`
  width: 200px;
  font-family: Montserrat-Bold;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #5e72e4;
`;
const ChoiceScreen = (props) => {
  const { navigation } = props;
  return (
    <MainContainer>
      <LogoContainer>
        <LogoImage
          source={{
            uri: `https://police.gov.mn/static/webs/policegovmn/assets/police.logo.png`,
          }}
          resizeMode="contain"
        />
        <LogoTitle>Цагдаагийн ерөнхий газар</LogoTitle>
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
