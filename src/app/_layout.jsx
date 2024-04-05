import { PaperProvider, DefaultTheme } from 'react-native-paper';
import { Stack } from 'expo-router';
import { COLORS } from '../constants';

const theme = {
  ...DefaultTheme,
  colors: COLORS,
};

export const unstable_settings = {
  initialRouteName: '(auth)/index',
};

const RootLayout = () => {
  return (
    <PaperProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(app)" />
      </Stack>
    </PaperProvider>
  );
};

export default RootLayout;
