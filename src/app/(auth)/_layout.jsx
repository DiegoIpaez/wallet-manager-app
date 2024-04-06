import StatusBar from '@/components/statusBar/StatusBar';
import { COLORS } from '@/constants';
import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        header: () => <StatusBar backgroundColor={COLORS.background} />,
        contentStyle: { backgroundColor: COLORS.background },
      }}
    >
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default AuthLayout;
