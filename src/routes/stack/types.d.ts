import type {StackNavigationProp} from '@react-navigation/stack';

export type MainStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  TabRouter: undefined;
};

export type MainNavigationProp = StackNavigationProp<MainStackParamList>;
