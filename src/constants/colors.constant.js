import { DefaultTheme } from 'react-native-paper';

const BASE_COLORS = {
  dark: 'black',
  grey: '#808080',
  success: '#198754',
  warning: '#ffc107',
  danger: '#dc3545',
  ligth: '#ffffff',
  ligthGrey: '#efefef',
};

export const COLORS = {
  ...DefaultTheme.colors,
  ...BASE_COLORS,
  primary: '#0d6efd',
  secondary: '#6c757d',
  tertiary: '#a1b2c3',
  surfaceVariant: BASE_COLORS.ligthGrey,
};
