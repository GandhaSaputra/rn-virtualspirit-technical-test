import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {MainData} from '../interface/MainData';
import {globalStyles} from '../theme/GlobalStyles';

interface CardFeed {
  data: MainData;
  likeOrDislikeFeed: (id: number, operator: string) => void;
}

const CardFeed: FC<CardFeed> = ({data, likeOrDislikeFeed}) => {
  return (
    <View style={styles.containerCardItem}>
      <Image source={{uri: data.image}} style={styles.imageItem} />
      <View style={styles.footerItem}>
        <View style={styles.containerLikeInfo}>
          <Text>{`${data.like} Like`}</Text>
        </View>
        <TouchableOpacity
          onPress={() => likeOrDislikeFeed(data.id, 'plus')}
          style={styles.buttonLike}>
          <Text style={styles.whiteText}>{'Like'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => likeOrDislikeFeed(data.id, 'minus')}
          style={styles.buttonDislike}>
          <Text style={styles.whiteText}>{'Dislike'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardFeed;

const styles = StyleSheet.create({
  containerCardItem: {
    height: 200,
    width: '90%',
    backgroundColor: '#525453',
    alignSelf: 'center',
    borderRadius: 10,
    ...globalStyles.shadow,
  },
  imageItem: {
    height: '75%',
    width: 'auto',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  footerItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  gap: {
    height: 15,
  },
  containerLikeInfo: {
    borderWidth: 1,
    borderColor: '#b8bab9',
    marginRight: 'auto',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonLike: {
    backgroundColor: '#4960ad',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 15,
    ...globalStyles.shadow,
  },
  buttonDislike: {
    backgroundColor: '#ad4956',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    ...globalStyles.shadow,
  },
  whiteText: {
    color: 'white',
    fontWeight: '500',
  },
});
