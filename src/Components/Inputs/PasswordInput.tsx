import React, {useState} from 'react';
import {BaseInput, TBaseInputProps} from './BaseInput';

export const PasswordInput = ({...restProps}: TBaseInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const onIconPress = () => {
    setIsVisible(prevIsVisible => !prevIsVisible);
  };

  return (
    <BaseInput
      {...restProps}
      icon={isVisible ? 'eye' : 'eyeCrossed'}
      secureTextEntry={!isVisible}
      onIconPress={onIconPress}
    />
  );
};
