import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '@/constants';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Link style={styles.btnLogout} href="/(auth)">
        Logout
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  btnLogout: {
    backgroundColor: COLORS.danger,
    borderRadius: 100,
    color: COLORS.ligth,
    marginHorizontal: 10,
    paddingVertical: 7,
    textAlign: 'center',
  },
  container: {
    backgroundColor: COLORS.ligth,
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
});

export default HomePage;
