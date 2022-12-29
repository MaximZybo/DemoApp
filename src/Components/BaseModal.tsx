import React, {useCallback} from 'react';
import {
  StyleProp,
  ViewStyle,
  BackHandler,
  View,
  StyleSheet,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {COLORS} from '@/Constants/Colors';
import {PressableOpacity} from './Buttons/PressableOpacity';

type BaseModalProps = {
  allowCloseModal?: boolean;
  children: React.ReactNode[] | React.ReactNode;
  backgroundPress?: () => void;
  overlayStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

export const BaseModal = ({
  allowCloseModal = false,
  children,
  backgroundPress,
  overlayStyle,
  containerStyle,
}: BaseModalProps) => {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (allowCloseModal) {
          return false;
        } else {
          return true;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [allowCloseModal]),
  );

  const onBackgroundPress = () => {
    if (allowCloseModal) {
      if (backgroundPress) {
        backgroundPress();
      } else {
        navigation.goBack();
      }
    }
  };
  return (
    <PressableOpacity
      style={[styles.baseModalOverlay, overlayStyle]}
      onPress={onBackgroundPress}
      activeOpacity={1}>
      <View style={containerStyle}>{children}</View>
    </PressableOpacity>
  );
};

export const styles = StyleSheet.create({
  baseModalOverlay: {
    flex: 1,
    backgroundColor: COLORS.MODAL_BACKGROUND,
  },
});
