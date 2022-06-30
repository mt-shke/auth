import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import RootStack from './RootStack';

const AuthNavigation: React.FC = () => {
  useEffect(() => {
    // if (!users.length) {
    //   realm.write(() => {
    //     realm.create('Task', Task.generate('A first automated task'));
    //   });
    // }
  }, []);

  return <RootStack />;
};

export default AuthNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    padding: 20,
    backgroundColor: 'green',
  },
});
