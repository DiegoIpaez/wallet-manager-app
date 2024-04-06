import { StyleSheet } from 'react-native';
import { Button as BaseButton } from 'react-native-paper';
import { COLORS } from '@/constants';

/**
 * A button is component that the user can press to trigger an action.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Button } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
 *     Press me
 *   </Button>
 * );
 *
 * export default MyComponent;
 * ```
 */
export default function Button({
  children,
  containerStyle = {},
  labelStyle = {},
  ...props
}) {
  return (
    <BaseButton
      style={[styles.container, containerStyle]}
      labelStyle={[styles.label, labelStyle]}
      {...props}
    >
      {children}
    </BaseButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
  },
  label: {
    color: COLORS.ligth,
  },
});
