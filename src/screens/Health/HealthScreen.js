import React, { useState } from "react";
import Header from "../../components/Header";
import styled from "styled-components/native";
import { PoliceColors } from "../../styles";
import FormItems from "../../components/FormItems";
import Button from "../../components/Button";
import { ScrollView } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";

const { Alabaster } = PoliceColors;
const NewsContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  margin-horizontal: 14px;
`;
const HealthTitle = styled.Text`
  width: 240px;
  margin-top: 25px;
  font-family: Montserrat-Bold;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #5e72e4;
`;
const FormContainer = styled.View`
  width: 100%;
  flex-direction: column;
  margin-top: 15px;
`;

const ButtonContainer = styled.View`
  width: 335px;
  height: 56px;
  margin-top: 20px;
  background: #5e72e4;
  border-radius: 5px;
`;
const items = [
  { id: 1, label: "Эрэгтэй" },
  { id: 2, label: "Эмэгтэй" },
];
const NewsScreen = ({ route }) => {
  const { title, type } = route.params;
  const [picker, setPicker] = useState(items[0]);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const onPress = () => {
    if (parseFloat(age) <= 0 || age === "") {
      showMessage({
        message: "Насаа үнэн зөв оруулна уу !",
        type: "danger",
      });
      return false;
    }
    if (parseFloat(weight) <= 0 || weight === "") {
      showMessage({
        message: "Жингээ үнэн зөв оруулна уу !",
        type: "danger",
      });
      return false;
    }
  };
  return (
    <>
      <FlashMessage position="top" />
      <NewsContainer>
        <Header title={title} />
        <ScrollView>
          <Container behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <HealthTitle>
              Та өөрийн жин хүйсээ оруулан өөрт тохирсон зөв зохистой
              хэрэглээгээ мэдэх боломжтой
            </HealthTitle>
            <FormContainer>
              <FormItems
                title="Хүйс"
                type="picker"
                picker={picker}
                items={items}
                setPicker={setPicker}
              />
              <FormItems title="НАС" type="age" setAge={setAge} />
              <FormItems
                title="Жин"
                type="weight"
                subTitle="Кг"
                setWeight={setWeight}
              />
            </FormContainer>
            <ButtonContainer>
              <Button title="хайлт хийх" icon="arrow-right" onPress={onPress} />
            </ButtonContainer>
          </Container>
        </ScrollView>
      </NewsContainer>
    </>
  );
};

export default NewsScreen;
