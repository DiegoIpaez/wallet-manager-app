import { DefaultTheme } from 'react-native-paper';

const BASE_COLORS = {
  primary: '#4E80EE',
  secondary: '#6c757d',
  tertiary: '#a1b2c3',
  dark: '#1B1D1F',
  grey: '#6C727F',
  success: '#198754',
  warning: '#ffc107',
  danger: '#dc3545',
  ligth: '#ffffff',
  ligthGrey: '#efefef',
  ligthDark: '#282B30',
};

export const COLORS = {
  ...DefaultTheme.colors,
  ...BASE_COLORS,
  background: BASE_COLORS.dark,
  backgroundSecondary: BASE_COLORS.ligthDark,
  onSurface: BASE_COLORS.ligth,
  onSurfaceVariant: BASE_COLORS.grey,
  surfaceVariant: BASE_COLORS.ligthDark,
};
