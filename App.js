import React from 'react';
import { StyleSheet, View , TextInput, Button, Linking } from 'react-native';

export default function App() {
  const [value, onChangeText] = React.useState('Please ');

  return (
    <View style={styles.container}>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    <Button title="Press me"
          onPress={() => Linking.openURL(value).catch((err) => console.error('An error occurred', err))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
