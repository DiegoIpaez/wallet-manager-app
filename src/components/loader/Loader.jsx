import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { COLORS } from '@/constants';
import styles from './loader.styles';

export default function Loading({
  spinning = true,
  color = COLORS.primary,
  size = 'large',
  ...props
}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={spinning}
        color={color}
        size={size}
        {...props}
      />
    </View>
  );
}
