import {Text} from 'react-native';
import {Font} from 'assets/StyleConfig.tsx';
import type * as React from 'react';
import {JSX} from 'react/jsx-runtime';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {TextStyle, ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type TypographyProps = {
  children?: React.ReactNode | undefined;
  fontSize?: number,
  bold?: 'bold'|'semibold'|'regular',
  color?: string,
  style?: StyleProp<TextStyle>|undefined,
}

export const Typography = ({ children, fontSize = Font.BODY2, bold = 'regular', color = '#000', style = {}} : TypographyProps) => {
  return (
    <Text style={[
      {
        fontFamily: 'Pretendard-Regular',
        fontSize: fontSize,
        fontWeight: bold,
        color: color,
      },
      style
    ]}>
      {children}
    </Text>
  )
}