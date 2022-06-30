import {yupResolver} from '@hookform/resolvers/yup';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {useForm} from 'react-hook-form';
import {View, Text, StyleSheet, Button} from 'react-native';
import Input from '../components/Input';
import {screenWidth} from '../globals';
import {TRootStackParamsList} from '../navigation/RootStack';
import {signUpSchema} from '../schema/yup';
import {ISignUpData} from '../ts/interfaces';

export type TLoginScreenProps = NativeStackScreenProps<
  TRootStackParamsList,
  'SignUpScreen'
>;

const LoginScreen: React.FC<TLoginScreenProps> = ({route, navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data: ISignUpData) => {
    if (data.email || data.password || data.passwordConfirmation) {
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
        <Input
          control={control}
          name="passwordConfirmation"
          error={errors.passwordConfirmation}
          key="passwordConfirmation"
          label={'Confirmer le mot de passe'}
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
