import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {LAYOUTS} from '@/Constants/Layouts';
import {COLORS} from '@/Constants/Colors';
import {AndleLeft} from '@/Assets/Svg';
import {PressableOpacity} from './Buttons/PressableOpacity';
import {Typography} from './Typography';

export const Header = ({
  navigation,
  options,
  route,
}: NativeStackHeaderProps) => {
  const canGoBack = navigation.canGoBack();

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.container}>
      <View
        style={{
          height: LAYOUTS.SVG_ICONS_SIZE,
        }}>
        {canGoBack && (
          <PressableOpacity
            hitSlop={5}
            onPress={navigation.goBack}
            style={styles.backButton}>
            <AndleLeft />
          </PressableOpacity>
        )}
        <Typography size="16" weight="semibold" style={styles.title}>
          {options?.title || route.name}
        </Typography>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 6,
    paddingBottom: 12,
    paddingHorizontal: LAYOUTS.PADDING,
    backgroundColor: COLORS.GREY_200,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginHorizontal: LAYOUTS.SVG_ICONS_SIZE,
  },
});
