import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import {colors} from '../globals';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoggedUserScreen from '../screens/LoggedUser';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

export type TRootStackParamsList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  LoggedUserScreen: undefined;
};

const Stack = createNativeStackNavigator<TRootStackParamsList>();
// const Tab = createMaterialBottomTabNavigator();

const RootStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={screenOptions}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoggedUserScreen" component={LoggedUserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const RootStack: React.FC = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Login"
//         activeColor={colors.blue}
//         inactiveColor={colors.grey}
//         barStyle={styles.bottomTab}
//         screenOptions={screenOptions}>
//         <Tab.Screen
//           name="LoginScreen"
//           component={LoginScreen}
//           // initialParams={homeParams}
//           options={{
//             tabBarLabel: 'Connection',
//             tabBarIcon: ({focused}) => (
//               <Ionicons
//                 // name={osIcon + "apps"}
//                 name={'home'}
//                 color={focused ? colors.blue : colors.grey}
//                 size={20}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="SignUpScreen"
//           component={SignUpScreen}
//           options={{
//             tabBarLabel: 'Inscription',
//             tabBarIcon: ({focused}) => (
//               <AntDesign
//                 // name={osIcon + "airplane"}
//                 name={'profile'}
//                 color={focused ? colors.blue : colors.grey}
//                 size={20}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="LoggedUserScreen"
//           component={LoggedUserScreen}
//           options={{
//             tabBarLabel: 'HomeUser',
//             tabBarIcon: ({focused}) => (
//               <AntDesign
//                 // name={osIcon + "airplane"}
//                 name={'profile'}
//                 color={focused ? colors.blue : colors.grey}
//                 size={20}
//               />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };
export default RootStack;

const styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: colors.background,
  },
});

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
