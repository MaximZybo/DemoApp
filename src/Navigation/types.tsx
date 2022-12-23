import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  BeforeAuth: NavigatorScreenParams<BeforeAuthStackParamList>;
  AfterAuth: NavigatorScreenParams<AfterAuthParamList>;
  PopUpModal: undefined;
  LoadingModal: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type BeforeAuthStackParamList = {
  Onboarding: undefined;
  Register: undefined;
  Login: undefined;
};

export type BeforeAuthStackScreenProps<
  T extends keyof BeforeAuthStackParamList,
> = CompositeScreenProps<
  NativeStackScreenProps<BeforeAuthStackParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export type AfterAuthParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  MoreStack: NavigatorScreenParams<MoreStackParamList>;
};

export type TabScreenProps<T extends keyof AfterAuthParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AfterAuthParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type HomeStackParamList = {
  Dashboard: undefined;
};

export type HomeStackScreenProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type MoreStackParamList = {
  ContactUs: undefined;
  Settings: undefined;
};

export type MoreStackScreenProps<T extends keyof MoreStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<MoreStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        HomeStackParamList,
        MoreStackParamList,
        AfterAuthParamList {}
  }
}
