import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from '@/Constants/Colors';
import {LAYOUTS} from '@/Constants/Layouts';
import {ConditionalWrapper} from './ConditionalWrapper';

type TAppScreenProps = {
  children: React.ReactNode;
  isScroll?: boolean;
  topPadding?: boolean;
  bottomPadding?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  edges?: Edge[];
};

export const AppScreen = ({
  children,
  isScroll = true,
  topPadding = true,
  bottomPadding = true,
  style,
  contentContainerStyle,
  edges = ['right', 'left', 'bottom'],
}: TAppScreenProps) => {
  return (
    <SafeAreaView edges={edges} style={[styles.container, style]}>
      <ConditionalWrapper
        condition={isScroll}
        wrapper={(wrapperChildren: React.ReactNode) => (
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            enableOnAndroid
            contentContainerStyle={styles.keyboardAware}>
            <>{wrapperChildren}</>
          </KeyboardAwareScrollView>
        )}>
        <View
          style={[
            styles.contentContainer,
            topPadding && styles.topPadding,
            bottomPadding && styles.bottomPadding,
            contentContainerStyle,
          ]}>
          {children}
        </View>
      </ConditionalWrapper>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    flexGrow: 1,
  },
  keyboardAware: {
    flexGrow: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: LAYOUTS.PADDING,
  },
  topPadding: {
    paddingTop: LAYOUTS.PADDING,
  },
  bottomPadding: {
    paddingBottom: LAYOUTS.PADDING,
  },
});
