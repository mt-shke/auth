import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const LoggedUserScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Bonjour yourEmail</Text>
    </View>
  );
};

export default LoggedUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
