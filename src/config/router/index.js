import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Splash, HomeScreen, ReadingPage, WritingPage, ListeningPage } from '../../containers/pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="ReadingPage" component={ReadingPage} options={{headerShown: false}} />
            <Stack.Screen name="WritingPage" component={WritingPage} options={{headerShown: false}} />
            <Stack.Screen name="ListeningPage" component={ListeningPage} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default Router;
