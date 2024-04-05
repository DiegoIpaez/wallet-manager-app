import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { COLORS } from '@/constants';

export default function Login() {
  const handleLogin = () => {
    router.push({ pathname: '/(app)' });
  };
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">Login</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" />
      <Button
        style={styles.btnContainer}
        labelStyle={styles.btnLabel}
        onPress={() => handleLogin()}
      >
        Iniciar sesión
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.primary,
  },
  btnLabel: {
    color: COLORS.ligth,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  input: {
    marginVertical: 10,
  },
});
