import React from "react";
import { Platform } from 'react-native';
import image from '../../../assets/other.jpg';
import styled from "styled-components/native";
import { PoliceColors } from "../../styles";
import Header from '../../components/Header';
const { Alabaster } = PoliceColors;

const ChoiceContainer = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background-color: ${Alabaster};
  paddingTop: ${Platform.OS === 'android' ? "25px" : 0};
`;
const Image = styled.Image`
  flex: 1;
  width: 100%;
`;
const OtherScreen = ({ route, navigation }) => {
  const { title } = route.params;
  return (
    <ChoiceContainer>
      <Header title={title} navigation={navigation} />
      <Image source={image} resizeMode="contain" />
    </ChoiceContainer>
  );
};

export default OtherScreen;
