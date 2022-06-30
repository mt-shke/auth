import React from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import {View, StyleSheet, Button} from 'react-native';
import {yupResolver} from '@hookform/resolvers/yup';
import Input from './Input';
import CustomSelectInput from './CustomSelectInput';

interface IFormProps {}

const Form: React.FC<IFormProps> = ({}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(),
  });

  const submitForm = (data: any) => {
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

  // const onSubmit = (data: IPayment) => submitForm(data);

  return (
    <View style={styles.container}>
      <Input
        control={control}
        name="id"
        error={errors.firstname}
        key="firstname"
        label={'First Name'}
      />
      <Input
        control={control}
        name="lastname"
        error={errors.lastname}
        key="lastname"
        label={'Last Name'}
      />

      <Button title="submit" onPress={handleSubmit(onSubmit)} />
      {/* to fix */}
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  containerInput: {},
  input: {
    backgroundColor: 'grey',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
  },
});
