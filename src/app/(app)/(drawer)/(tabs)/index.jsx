import { Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '@/constants';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bienvenido!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: COLORS.primary,
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default HomePage;
