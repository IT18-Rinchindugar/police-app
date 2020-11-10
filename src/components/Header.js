import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import Icon from "@expo/vector-icons/Feather";
import { styledScaleSize } from "../styles/utils";
const HeaderContainer = styled.SafeAreaView`
  height: ${styledScaleSize(50)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;
const HeaderTitle = styled.Text`
  font-family: Montserrat-SemiBold;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
`;
const Button = styled.TouchableOpacity`
  margin-left: ${styledScaleSize(18)};
`;
const DefaultButton = styled.View`
  margin-right: ${styledScaleSize(40)};
`;
const Header = (props) => {
  const { title, navigation } = props;
  return (
    <HeaderContainer>
      {navigation && (
        <Button onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={22} color="#000" />
        </Button>
      )}
      <HeaderTitle>{title}</HeaderTitle>
      {navigation && <DefaultButton />}
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.object,
};
export default Header;
