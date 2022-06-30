import {yupResolver} from '@hookform/resolvers/yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useForm} from 'react-hook-form';
import {View, StyleSheet, Button} from 'react-native';
import Input from '../components/Input';
import {screenWidth} from '../globals';
import {TRootStackParamsList} from '../navigation/RootStack';
import {loginSchema} from '../schema/yup';
import {IUser} from '../ts/interfaces';

export type TLoginScreenProps = NativeStackScreenProps<
  TRootStackParamsList,
  'LoginScreen'
>;

const LoginScreen: React.FC<TLoginScreenProps> = ({route, navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data: IUser) => {
    if (data.email || data.password) {
      console.log(data);

      // navigation.navigate('LoggedUserScreen');
    }

    // const loggedUser = realm.objectForPrimaryKey('User', user._id) as IUserData;
    // const newPaymentId = new UUID().toHexString();
    // if (schema === 'income') {
    //   const payment = {...data, _id_income: newPaymentId};
    //   realm.write(() => {
    //     loggedUser.incomes.push(payment);
    //   });
    // }
    // if (schema === 'expense') {
    //   const payment = {...data, _id_expense: newPaymentId};
    //   realm.write(() => {
    //     loggedUser.expenses.push(payment);
    //   });
    // }
    // navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <Input
          control={control}
          name="email"
          error={errors.email}
          key="email"
          label={'Email'}
        />
        <Input
          control={control}
          name="password"
          error={errors.password}
          key="password"
          label={'Mot de passe'}
        />

        <Button title="submit" onPress={handleSubmit(onSubmit)} />
        {/* to fix */}
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerForm: {
    width: screenWidth - 80,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'grey',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
  },
});

// import React from 'react';
// import {FieldValues, useForm} from 'react-hook-form';
// import {View, StyleSheet, Button} from 'react-native';
// import {yupResolver} from '@hookform/resolvers/yup';
// import Input from './Input';
// import CustomSelectInput from './CustomSelectInput';
// import { IUser } from '../ts/interfaces';

// interface IFormProps {}

// const Form: React.FC<IFormProps> = ({}) => {
//   const {
//     control,
//     handleSubmit,
//     formState: {errors},
//   } = useForm({
//     resolver: yupResolver(),
//   });

//   const submitForm = (data: any) => {
//     // const loggedUser = realm.objectForPrimaryKey('User', user._id) as IUserData;
//     // const newPaymentId = new UUID().toHexString();
//     // if (schema === 'income') {
//     //   const payment = {...data, _id_income: newPaymentId};
//     //   realm.write(() => {
//     //     loggedUser.incomes.push(payment);
//     //   });
//     // }
//     // if (schema === 'expense') {
//     //   const payment = {...data, _id_expense: newPaymentId};
//     //   realm.write(() => {
//     //     loggedUser.expenses.push(payment);
//     //   });
//     // }
//     // navigation.navigate('HomeScreen');
//   };

//   const onSubmit = (data: IUser) => submitForm(data);

//   return (
//     <View style={styles.container}>
//       <Input
//         control={control}
//         name="id"
//         error={errors.firstname}
//         key="firstname"
//         label={'First Name'}
//       />
//       <Input
//         control={control}
//         name="lastname"
//         error={errors.lastname}
//         key="lastname"
//         label={'Last Name'}
//       />

//       <Button title="submit" onPress={handleSubmit(onSubmit)} />
//       {/* to fix */}
//     </View>
//   );
// };

// export default Form;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 10,
//   },
//   containerInput: {},
//   input: {
//     backgroundColor: 'grey',
//     borderWidth: 2,
//     borderColor: 'black',
//     borderRadius: 10,
//     marginBottom: 10,
//   },
// });
