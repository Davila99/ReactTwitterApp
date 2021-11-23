import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TweetDetailScreen from '../screens/TweetDetailScreen';
import HomeScreen from '../screens/HomeScreen';


export type MainStackParamList = {
    HomeScreen: undefined;
    TweetDetailScreen: { id: number, tweet_text: string };

};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ title: 'Inicio' }} />
            <Stack.Screen
                name="TweetDetailScreen"
                component={TweetDetailScreen} />
        </Stack.Navigator>
    )

}

export default MainStackNavigator
