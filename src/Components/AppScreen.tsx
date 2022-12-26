import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from '@/Constants/Colors';
import {LAYOUTS} from '@/Constants/Layouts';

type AppScreenProps = {
  children: React.ReactNode;
  isScroll?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  edges?: Edge[];
};

export const AppScreen = ({
  children,
  isScroll = true,
  style,
  contentContainerStyle,
  edges = ['top', 'right', 'left', 'bottom'],
}: AppScreenProps) => {
  return (
    <SafeAreaView edges={edges} style={[styles.container, style]}>
      {isScroll ? (
        <KeyboardAwareScrollView
          contentContainerStyle={[
            styles.contentContainer,
            contentContainerStyle,
          ]}
          bounces={false}
          scrollEventThrottle={1}
          showsVerticalScrollIndicator={false}>
          {children}
        </KeyboardAwareScrollView>
      ) : (
        <View style={[styles.contentContainer, contentContainerStyle]}>
          {children}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flexGrow: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: LAYOUTS.PADDING,
    paddingBottom: LAYOUTS.PADDING,
  },
});
