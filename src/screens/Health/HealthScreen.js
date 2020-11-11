import React, { useState } from "react";
import Header from "../../components/Header";
import styled from "styled-components/native";
import { PoliceColors } from "../../styles";
import FormItems from "../../components/FormItems";
import Button from "../../components/Button";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";
import Icon from "@expo/vector-icons/Feather";
const { Alabaster } = PoliceColors;
const NewsContainer = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
`;

const Container = styled.View`
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
const ResultContainer = styled.View`
  position: absolute;
  height: 60%;
  width: 83%;
  top: 160px;
  border-radius: 15px;
  margin-horizontal: 30px;
  background-color: #fff;
`;
const ResultCloseButton = styled.TouchableOpacity`
  height: 30px;
  width: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;
const items = [
  { id: 1, label: "Эрэгтэй" },
  { id: 2, label: "Эмэгтэй" },
];
const NewsScreen = ({ route, navigation }) => {
  const { title, type } = route.params;
  const [picker, setPicker] = useState(items[0]);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(false);
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
    setResult(12);
  };
  return (
    <>
      <FlashMessage position="top" />
      <NewsContainer>
        <Header title={title} navigation={navigation} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView style={{ paddingBottom: "100%" }}>
            <Container>
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
                <Button
                  title="хайлт хийх"
                  icon="arrow-right"
                  onPress={onPress}
                />
              </ButtonContainer>
            </Container>
          </ScrollView>
        </KeyboardAvoidingView>
        {result && (
          <ResultContainer
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.53,
              shadowRadius: 13.97,

              elevation: 21,
            }}
          >
            <ResultCloseButton onPress={() => setResult(false)}>
              <Icon name="x" size={20} color="#000" />
            </ResultCloseButton>
          </ResultContainer>
        )}
      </NewsContainer>
    </>
  );
};

export default NewsScreen;
