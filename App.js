import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AnimeProfile from './screens/AnimeProfile';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // <View>
    //   <Text>Navigation Home</Text>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AnimeProfile" component={AnimeProfile} />
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#202020',
    opacity: 0.99,
  },
});

export default App;
