import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
const HeaderContainer = styled.View`
  height: 50px;
  justify-content: center;
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
const Header = (props) => {
  const { title } = props;
  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
