import React from 'react';
import { View, Text, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Pressable
        onPress={() => navigation.navigate('Details')}
        style={({ pressed }) => ({
          backgroundColor: pressed ? '#ddd' : '#2196F3',
          padding: 10,
          borderRadius: 5,
          marginTop: 20
        })}
      >
        <Text style={{ color: 'white' }}>Go to Details</Text>
      </Pressable>
    </View>
  );
}
