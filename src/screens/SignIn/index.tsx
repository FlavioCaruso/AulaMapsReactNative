import React from 'react';
import {View, Text} from 'react-native';
import {Formik} from 'formik';

// Components
import {Input, Button} from '../../components';

// Styles
import {styles} from './styles';

// Hooks
import useSignIn from './hooks/useSignIn';

export default function SignIn() {
  const {initialValues, SignInSchema, submit, goToSignUp} = useSignIn();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FIAP</Text>
      <Text style={styles.subTitle}>Educação que transforma!</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={(values, {setSubmitting}) => submit(values, setSubmitting)}>
        {({handleChange, handleSubmit, values, errors, isSubmitting}) => (
          <>
            <Input
              placeholder="Digite seu e-mail"
              value={values.email}
              onChangeText={handleChange('email')}
              error={errors.email}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Input
              placeholder="Digite sua senha"
              value={values.pass}
              secureTextEntry
              onChangeText={handleChange('pass')}
              error={errors.pass}
              autoCapitalize="none"
            />
            <Button
              type="secondary"
              disabled={isSubmitting}
              text={isSubmitting ? 'Carregando...' : 'Entrar'}
              onPress={handleSubmit}
            />
            <Button type="primary" text="Cadastrar" onPress={goToSignUp} />
          </>
        )}
      </Formik>
    </View>
  );
}
