import React, { useState } from 'react';
import { View, Text, Button } from "react-native";

const [tweets, settweetsData] = useState([])

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            {
                tweetsData.map(tweet => (
                    <Text key={tweet.id}>{tweet.tweet_text}</Text>
                ))
            }
            {/* <Button
          title="Go to Details"
          onPress={() => navigation.navigate('FeedScreen', {
            id: 21,
            name: 'Es la edad de Eliseo',
          })}
        /> */}

        </View>
    );
}

export default HomeScreen