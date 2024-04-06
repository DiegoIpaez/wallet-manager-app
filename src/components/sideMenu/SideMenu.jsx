import { router } from 'expo-router';
import { Text } from 'react-native-paper';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { COLORS } from '@/constants';

export default function SideMenu(props) {
  const logoutAndRedirect = async () => {
    router.push({ pathname: '/(auth)' });
  };

  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView {...props}>
        <Text style={styles.title}>WalletManager</Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity
        style={styles.logoutContainer}
        onPress={logoutAndRedirect}
      >
        <AntDesign style={styles.logoutIcon} name="logout" />
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContainer: { backgroundColor: COLORS.backgroundSecondary, flex: 1 },
  logoutContainer: {
    backgroundColor: COLORS.danger,
    bottom: 50,
    flexDirection: 'row',
    left: 0,
    padding: 17,
    position: 'absolute',
    right: 0,
  },
  logoutIcon: {
    color: COLORS.ligth,
    fontSize: 18,
    paddingRight: 25,
  },
  logoutText: {
    color: COLORS.ligth,
    fontSize: 14,
  },
  title: {
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 20,
    textAlign: 'center',
  }
});
