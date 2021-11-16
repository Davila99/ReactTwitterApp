import React from 'react';
import { View,Text,Button } from "react-native";


const FeedScreen = ({navigation,route}) => {
    const { id, name } = route.params;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Feed Screen {id} {name}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('FeedScreen')}
          
        />
  
        {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
  
      </View>
    );
  }

  export default FeedScreen