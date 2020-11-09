import React, { useState } from "react";
import { Keyboard, Platform } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";
import RNPickerSelect from "react-native-picker-select";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const PickerView = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 5px;
  padding-horizontal: 20px;
  margin-top: 10px;
`;
const SelectedPicker = styled.View`
  flex-direction: row;
  align-items: center;
`;
const SelectedPickerText = styled.Text`
  font-family: Montserrat-Bold;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #5e72e4;
`;

const SelectButtonIconView = styled.View``;
const FormPicker = (props) => {
  const { items, selectedValue, setSelectedValue } = props;
  const [tempValue, setTempValue] = useState(selectedValue);

  return (
    <RNPickerSelect
      onValueChange={(value) =>
        Platform.OS === "ios" ? setTempValue(value) : setSelectedValue(value)
      }
      items={items.map((item) => ({ label: item.label, value: item }))}
      placeholder={{}}
      onDonePress={() => setSelectedValue(tempValue)}
    >
      <PickerView
        activeOpacity={0.7}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <SelectedPicker>
          <SelectedPickerText numberOfLines={1}>
            {selectedValue.label}
          </SelectedPickerText>
        </SelectedPicker>
        <SelectButtonIconView>
          <Icon name="chevron-down" color="#5E72E4" size={25} />
        </SelectButtonIconView>
      </PickerView>
    </RNPickerSelect>
  );
};

export default FormPicker;
