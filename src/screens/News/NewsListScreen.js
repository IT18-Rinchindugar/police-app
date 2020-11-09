import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import styled from "styled-components/native";
import { PoliceColors } from "../../styles";
import NewsCard from "../../components/NewsCard";
import { FlatList } from "react-native";
const { Alabaster } = PoliceColors;

const items = [
  {
    id: 1,
    title:
      "Монголчуудын шар айрагны хэрэглээ дэлхийд эхний 10 - т бичигдэ байна...",
  },
  {
    id: 2,
    title:
      "Монголчуудын шар айрагны хэрэглээ дэлхийд эхний 10 - т бичигдэ байна...",
  },
  {
    id: 3,
    title:
      "Монголчуудын шар айрагны хэрэглээ дэлхийд эхний 10 - т бичигдэ байна...",
  },
  {
    id: 4,
    title:
      "Монголд архи үйлдвэрлэх цэг 2020 оны байдлаар 145 салбар байна... Монголд архи үйлдвэрлэх цэг 2020 оны байдлаар 145 салбар байна...",
  },
];

const NewsContainer = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${Alabaster};
`;

const Container = styled.View`
  flex: 1;
  margin-horizontal: 14px;
`;

const Indicator = styled.ActivityIndicator`
  padding-vertical: 20px;
`;

const NewsListScreen = ({ route, navigation }) => {
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(items);
  }, []);
  const { title, type } = route.params;
  const renderFooter = () => {
    if (!fetching) return null;
    return <Indicator size="small" color="#5e72e4" />;
  };
  const handleMore = () => {
    setFetching(true);
  };
  return (
    <NewsContainer>
      <Header title={title} />
      <Container>
        <FlatList
          data={data}
          nestedScrollEnabled
          ListFooterComponent={renderFooter}
          renderItem={({ item }) => (
            <NewsCard
              key={item.id}
              title={item.title}
              onPress={() => navigation.navigate("NewsDetails", { data: item })}
            />
          )}
          keyExtractor={(item) => item.id}
          key={1}
          maxToRenderPerBatch={6}
          initialNumToRender={6}
          onEndReached={handleMore}
          onEndReachedThreshold={0.02}
        />
      </Container>
    </NewsContainer>
  );
};

export default NewsListScreen;
