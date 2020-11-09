import React, { useState } from "react";
import styled from "styled-components/native";
import FormInput from "./FormInput";
import FormPicker from "./FormPicker";
const Container = styled.View`
  flex-direction: column;
  height: 85px;
  margin-vertical: 12px;
  border-radius: 5px;
`;

const FormTitle = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  text-align: left;
  text-transform: uppercase;
`;

const FormItems = (props) => {
  const {
    title,
    type,
    subTitle,
    picker,
    setPicker,
    items,
    setAge,
    setWeight,
  } = props;
  return (
    <Container>
      <FormTitle>{title}</FormTitle>
      {type === "picker" && (
        <FormPicker
          items={items}
          selectedValue={picker}
          setSelectedValue={setPicker}
        />
      )}
      {type === "weight" && <FormInput title={subTitle} setAge={setWeight} />}
      {type === "age" && <FormInput setAge={setAge} />}
    </Container>
  );
};

export default FormItems;
