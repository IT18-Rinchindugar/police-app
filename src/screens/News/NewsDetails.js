import React from "react";
import styled from "styled-components/native";

const DetailsContainer = styled.View`
  flex: 1;
`;
const NewsDetails = ({ route }) => {
  const { data } = route.params;
  console.log(data);
  return <DetailsContainer />;
};
export default NewsDetails;
