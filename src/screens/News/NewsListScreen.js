import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import styled from "styled-components/native";
import { PoliceColors } from "../../styles";
import axios from "axios";
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

const NewsContainer = styled.SafeAreaView`
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
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 4;
  const { title, type } = route.params;
  useEffect(() => {
    axios
      .get(`http://202.70.34.25:3001/api/${type}?page=${page}&limit=${limit}`)
      .then((res) => {
        setLoading(false);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const renderFooter = () => {
    if (!fetching) return null;
    return <Indicator size="small" color="#5e72e4" />;
  };
  const handleMore = () => {
    setFetching(true);
    axios
      .get(
        `http://202.70.34.25:3001/api/${type}?page=${page + 1}&limit=${limit}`
      )
      .then((res) => {
        setData(data.concat(res.data.data));
        setFetching(false);
        setPage(page + 1);
      });
  };
  return (
    <NewsContainer>
      <Header title={title} navigation={navigation} />
      <Container>
        {loading ? (
          <Indicator size="large" color="#5e72e4" />
        ) : (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled
            ListFooterComponent={renderFooter}
            renderItem={({ item }, index) => (
              <NewsCard
                key={index}
                title={item.title}
                photo={item.photo}
                onPress={() =>
                  navigation.navigate("NewsDetails", { data: item })
                }
              />
            )}
            keyExtractor={(item) => item._id}
            key={1}
            maxToRenderPerBatch={6}
            initialNumToRender={6}
            onEndReached={handleMore}
            onEndReachedThreshold={0.02}
          />
        )}
      </Container>
    </NewsContainer>
  );
};

export default NewsListScreen;
