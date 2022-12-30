import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '@/Constants/Colors';
import {LAYOUTS} from '@/Constants/Layouts';
import {BaseModal} from '@/Components/BaseModal';
import {Typography} from '@/Components/Typography';
import {Button} from '@/Components/Buttons/Button';
import {RootStackScreenProps} from '@/Navigation/types';

export const PopUpModal = ({
  navigation,
  route: {
    params: {
      title,
      primaryTitle,
      onPrimaryPress,
      secondaryTitle,
      onSecondaryPress,
    },
  },
}: RootStackScreenProps<'PopUpModal'>) => {
  const pressHandler = () => {
    navigation.goBack();
    onPrimaryPress?.();
  };

  const secondaryPressHandler = () => {
    navigation.goBack();
    onSecondaryPress?.();
  };

  return (
    <BaseModal
      allowCloseModal
      overlayStyle={styles.overlay}
      containerStyle={styles.container}>
      <Typography size="16" weight="semibold">
        {title}
      </Typography>
      <Button
        title={primaryTitle || 'OK'}
        style={styles.button}
        onPress={pressHandler}
      />
      {!!secondaryTitle && (
        <Button
          type="tertiary"
          title={secondaryTitle}
          style={styles.button}
          onPress={secondaryPressHandler}
        />
      )}
    </BaseModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    maxHeight: '70%',
    width: '70%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    padding: LAYOUTS.PADDING,
    alignItems: 'center',
  },
  button: {
    marginTop: LAYOUTS.PADDING,
    marginBottom: 0,
  },
});
