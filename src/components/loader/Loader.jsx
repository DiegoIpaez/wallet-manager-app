import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { COLORS } from '@/constants';
import styles from './loader.styles';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating color={COLORS.primary} size="large" />
    </View>
  );
}
