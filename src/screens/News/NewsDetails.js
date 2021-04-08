import React from "react";
import styled from "styled-components/native";
import Icon from "@expo/vector-icons/Feather";
import moment from "moment";

const DetailsContainer = styled.SafeAreaView`
  flex: 1;
  height: 100%;
`;

const ScrollNews = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 25px;
  top: 15px;
  z-index: 1;
  height: 30px;
  width: 30px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.2);
  justify-content: center;
  align-items: center;
`;

const NewsImage = styled.Image`
  height: 200px;
`;

const ContentContainer = styled.View`
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  margin-horizontal: 15px;
  margin-bottom: 50px;
`;

const ContentTitle = styled.Text`
  margin-top: 20px;
  font-family: Montserrat-SemiBold;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  color: #5e72e4;
  letter-spacing: 1px;
`;

const ContentDate = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;
const ContentDescription = styled.Text`
  margin-top: 15px;
  font-family: Montserrat-SemiBold;
  font-size: 14px;
  font-style: normal;
  font-weight: 100;
  line-height: 20px;
  text-align: left;
  letter-spacing: 0.6px;
`;

const ContentText = styled.Text`
  margin-top: 10px;
  font-family: Montserrat-Regular;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-align: left;
  letter-spacing: 0.8px;
`;
const ContentAds = styled.Image`
  margin-top: 15px;
  height: 80px;
  border-radius: 6px;
`;

const NewsDetails = ({ route, navigation }) => {
  const { data } = route.params;
  const { photo, title, description, content, createdAt } = data;
  return (
    <DetailsContainer>
      <ScrollNews showsVerticalScrollIndicator={false}>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="x" color="#fff" size={20} />
        </BackButton>
        <NewsImage
          source={{
            uri: `http://103.50.205.163:3001/uploads/${photo}`,
          }}
          resizeMode="cover"
        />
        <ContentContainer>
          <ContentTitle>{title}</ContentTitle>
          <ContentDate>
            <Icon name="clock" color="#5e72e4" size={20} />
            <>
              <ContentText
                style={{ marginLeft: 10, marginBottom: 0.5, color: "#5e72e4" }}
              >
                {moment(createdAt).fromNow()}
              </ContentText>
            </>
          </ContentDate>
          <ContentDescription>{description}</ContentDescription>
          <ContentAds
            source={{
              uri:
                "https://police.gov.mn/resource/policegovmn/Banner/2018/10/12/val3fb1wya6p9rh9/home-slide-5.jpg",
            }}
            resizeMode="contain"
          />
          <ContentText>{content}</ContentText>
          <ContentAds
            source={{
              uri:
                "https://police.gov.mn/resource/policegovmn/Banner/2018/10/12/z4b0qjvoo3bajm12/1.jpg",
            }}
            resizeMode="contain"
          />
        </ContentContainer>
      </ScrollNews>
    </DetailsContainer>
  );
};
export default NewsDetails;
