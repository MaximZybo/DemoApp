import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ConditionalWrapper} from '@/Components/ConditionalWrapper';
import {COLORS} from '@/Constants/Colors';

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
  edges = ['top', 'right', 'left'],
}: AppScreenProps) => {
  return (
    <SafeAreaView edges={edges} style={[styles.container, style]}>
      <ConditionalWrapper
        condition={isScroll}
        wrapper={(wrapperChildren: React.ReactNode) => (
          <KeyboardAwareScrollView style={styles.keyboardAware} enableOnAndroid>
            <>{wrapperChildren}</>
          </KeyboardAwareScrollView>
        )}>
        <View style={[styles.contentContainer, contentContainerStyle]}>
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
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  keyboardAware: {
    flex: 1,
  },
});
