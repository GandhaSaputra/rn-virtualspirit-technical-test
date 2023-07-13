import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {MAIN_DATA} from '../constants';
import CardFeed from '../components/CardFeed';
import ButtonAction from '../components/ButtonAction';
import {MainData} from '../interface/MainData';

const MainScreen = () => {
  const [listData, setListData] = useState<MainData[]>(MAIN_DATA);

  const likeOrDislikeFeed = (id: number, operator: string) => {
    setListData(prevState => {
      return prevState.map(e => {
        if (id === e.id) {
          return {
            ...e,
            like: operator === 'plus' ? e.like + 1 : e.like - 1,
          };
        } else {
          return e;
        }
      });
    });
  };

  const onLikeAllOrDislikeAllOrResetAllLikeFeed = (operator: string) => {
    setListData(prevState => {
      return prevState.map(e => {
        return {
          ...e,
          like:
            operator === 'plus'
              ? e.like + 1
              : operator === 'minus'
              ? e.like - 1
              : 0,
        };
      });
    });
  };

  const renderListSeparator = () => {
    return <View style={styles.gap} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerList}>
        <ButtonAction
          title="Like All"
          onLikeOrDislikeOrResetAllLikeFeed={() =>
            onLikeAllOrDislikeAllOrResetAllLikeFeed('plus')
          }
        />
        <ButtonAction
          title="Reset All"
          onLikeOrDislikeOrResetAllLikeFeed={() =>
            onLikeAllOrDislikeAllOrResetAllLikeFeed('reset')
          }
        />
        <ButtonAction
          title="Dislike All"
          onLikeOrDislikeOrResetAllLikeFeed={() =>
            onLikeAllOrDislikeAllOrResetAllLikeFeed('minus')
          }
        />
      </View>
      <View style={styles.gap} />
      <FlatList
        data={listData}
        keyExtractor={(e, i) => i.toString()}
        renderItem={({item}) => {
          return <CardFeed data={item} likeOrDislikeFeed={likeOrDislikeFeed} />;
        }}
        ItemSeparatorComponent={renderListSeparator}
      />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  gap: {
    height: 15,
  },
});
