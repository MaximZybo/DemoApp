import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLORS} from '@/Constants/Colors';
import {LAYOUTS} from '@/Constants/Layouts';
import {useAppSelector} from '@/Hooks/redux';
import {getIsSignedIn} from '@/Store/Profile/selectors';
import {Header} from './Header';

type TAppScreenProps = {
  children: React.ReactNode[] | React.ReactNode;
  headerTitle?: string;
  isScroll?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
};

export const AppScreen = ({
  children,
  headerTitle,
  isScroll = true,
  style,
  contentContainerStyle,
}: TAppScreenProps) => {
  const isSignedIn = useAppSelector(getIsSignedIn);

  const {top, bottom, left, right} = useSafeAreaInsets();
  const paddingTop = Math.round(top);
  const paddingBottom = Math.round(bottom);
  const paddingLeft = Math.round(left);
  const paddingRight = Math.round(right);

  const safeAreaVerticalStyle = StyleSheet.flatten([
    styles.safeAreaContainer,
    !headerTitle && {paddingTop},
    // if user is signed in, tab bar will add bottom safeArea
    !isSignedIn && {paddingBottom},
    style,
  ]);

  return (
    <View style={safeAreaVerticalStyle}>
      {!!headerTitle && (
        <Header
          title={headerTitle}
          paddingTop={paddingTop}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
        />
      )}
      {isScroll ? (
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          enableOnAndroid
          style={styles.scroll}
          contentContainerStyle={styles.scrollContainer}>
          <View
            style={[styles.safeAreaHorizontal, {paddingLeft, paddingRight}]}>
            <View style={[styles.contentContainer, contentContainerStyle]}>
              {children}
            </View>
          </View>
        </KeyboardAwareScrollView>
      ) : (
        <View style={[styles.safeAreaHorizontal, {paddingLeft, paddingRight}]}>
          <View style={[styles.contentContainer, contentContainerStyle]}>
            {children}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
  },
  safeAreaHorizontal: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  contentContainer: {
    flex: 1,
    padding: LAYOUTS.PADDING,
  },
});
