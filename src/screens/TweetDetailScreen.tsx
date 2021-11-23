import React from 'react';
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MainStackParamList } from '../navigators/MainStackNavigator';


type Props = NativeStackScreenProps<MainStackParamList, 'TweetDetailScreen'>;

const TweetDetailScreen = ({ navigation,route }:Props) => {

  const { id, tweet_text } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>{id} {tweet_text}</Text> 
    </View>
  );
}

export default TweetDetailScreen