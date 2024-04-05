import { Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">¡Oops! Página no encontrada</Text>
      <Text variant="labelLarge">
        Parece que te has topado con un callejón sin salida en nuestra
        aplicación. Lo sentimos mucho por el inconveniente.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
});
