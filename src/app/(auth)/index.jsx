import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { TextInput, Text } from 'react-native-paper';
import Button from '@/components/button/Button';

export default function Login() {
  const handleLogin = () => {
    router.push({ pathname: '/(app)' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} variant="headlineSmall">
        WalletManager
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <Button
        containerStyle={styles.btnContainerStyle}
        onPress={() => handleLogin()}
      >
        Iniciar sesión
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainerStyle: {
    marginTop: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  input: {
    marginVertical: 10,
  },
  title: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
