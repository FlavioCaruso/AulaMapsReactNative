import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';

// Types
import type {MainNavigationProp} from '../../../routes/stack/types';

// Dispatch
import {useAppDispatch} from '../../../store/hooks';

// Actions
import {setUser} from '../../../store/user/userSlice';

export default function useSignIn() {
  const navigation = useNavigation<MainNavigationProp>();
  const dispatch = useAppDispatch();

  const initialValues = {email: '', pass: ''};

  const submit = (
    values: typeof initialValues,
    setSubmitting: (isSubmitting: boolean) => void,
  ) => {
    dispatch(setUser({email: values.email, token: '@TOKEN'}));

    setTimeout(() => {
      setSubmitting(false);
      navigation.replace('TabRouter');
    }, 5000);
  };

  const goToSignUp = () => {
    navigation.push('SignUp');
  };

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Por favor insira um e-mail válido')
      .required('Este campo é obrigatório'),
    pass: Yup.string().required('Este campo é obrigatório'),
  });

  return {
    SignInSchema,
    submit,
    goToSignUp,
    initialValues,
  };
}
