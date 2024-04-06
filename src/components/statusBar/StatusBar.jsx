import { COLORS } from '@/constants';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar as RNStatusBar,
} from 'react-native';

export default function StatusBar({
  backgroundColor = COLORS.backgroundSecondary,
  barStyle = 'ight-content',
  ...props
}) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <RNStatusBar
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        {...props}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'plum',
    flex: 1,
    height: RNStatusBar.currentHeight,
    marginBottom: RNStatusBar.currentHeight,
  },
});
