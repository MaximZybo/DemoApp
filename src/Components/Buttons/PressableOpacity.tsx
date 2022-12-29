import React from 'react';
import {Pressable, PressableProps, StyleProp, ViewStyle} from 'react-native';

type TPressableOpacityProps = PressableProps & {
  activeOpacity?: number;
  style?: StyleProp<ViewStyle>;
};

export const PressableOpacity = ({
  activeOpacity = 0.5,
  children,
  disabled,
  style,
  onPress,
  ...props
}: TPressableOpacityProps) => {
  return (
    <Pressable
      style={({pressed}) => [{opacity: pressed ? activeOpacity : 1}, style]}
      disabled={disabled}
      onPress={onPress}
      {...props}>
      {children}
    </Pressable>
  );
};
