import React, { useEffect, useState, useCallback } from "react";
import Header from "../../components/Header";
import styled from "styled-components/native";
import { PoliceColors } from "../../styles";
import axios from "axios";
import NewsCard from "../../components/NewsCard";
import { FlatList, RefreshControl } from "react-native";
import FeedLoad from "../../components/FeedLoad";
const { Alabaster } = PoliceColors;

const NewsContainer = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  background-color: ${Alabaster};
`;

const Container = styled.View`
  flex: 1;
  margin-horizontal: 14px;
  background-color: ${Alabaster};
`;

const Indicator = styled.ActivityIndicator`
  padding-vertical: 20px;
`;

const NewsListScreen = ({ route, navigation }) => {
  const [fetching, setFetching] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 4;
  const { title, type } = route.params;
  const fetchData = () => {
    axios
      .get(`http://103.50.205.163:3001/api/${type}?page=${page}&limit=${limit}`)
      .then((res) => {
        setLoading(false);
        setData(res.data.data);
        setRefreshing(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    setPage(1);
    fetchData();
  }, [refreshing]);
  const renderFooter = () => {
    if (!fetching) return null;
    return <Indicator size="small" color="#5e72e4" />;
  };
  const handleMore = () => {
    setFetching(true);
    axios
      .get(
        `http://103.50.205.163:3001/api/${type}?page=${page + 1}&limit=${limit}`
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
          <FeedLoad />
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
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            contentContainerStyle={{ paddingTop: 8 }}
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
