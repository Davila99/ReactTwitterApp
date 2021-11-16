import React from 'react';
import { View,Text,Button } from "react-native";

const HomeScreen = ({navigation}) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('FeedScreen', {
            id: 21,
            name: 'Es la edad de Eliseo',
          })}
        />
      </View>
    );
  }

  export default HomeScreen