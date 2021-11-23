import React from 'react';
import { View, Text, Button } from "react-native";


const FeedScreen = ({ navigation,route }) => {

  const { id, tweet_text,tweet_date } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>{id} {tweet_text}{tweet_date}</Text> 

      <Button title="Atras" onPress={() => navigation.goBack()} />
      {/* <Button
        title="Cargar otro ventana"
        onPress={() => navigation.push('FeedScreen')}
      /> */}

    </View>
  );
}

export default FeedScreen