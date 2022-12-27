import React from 'react';
import {Pressable, PressableProps, StyleProp, ViewStyle} from 'react-native';

type TPressableOpacityProps = PressableProps & {
  style?: StyleProp<ViewStyle>;
};

export const PressableOpacity = ({
  children,
  disabled,
  style,
  onPress,
  ...props
}: TPressableOpacityProps) => {
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
