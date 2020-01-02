import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-material-ui';

export class HomeScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Home Screen ..</Text>
        </View>
      );
    }
  }


  const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  });
  