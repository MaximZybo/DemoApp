import React from 'react';
import {Pressable, PressableProps, StyleProp, ViewStyle} from 'react-native';

export type PressableOpacityProps = PressableProps & {
  style?: StyleProp<ViewStyle>;
};

export const PressableOpacity = ({
  children,
  disabled,
  style,
  onPress,
  ...props
}: PressableOpacityProps) => {
  return (
    <Pressable
      style={({pressed}) => [{opacity: pressed ? 0.5 : 1}, style]}
      disabled={disabled}
      onPress={onPress}
      {...props}>
      {children}
    </Pressable>
  );
};
