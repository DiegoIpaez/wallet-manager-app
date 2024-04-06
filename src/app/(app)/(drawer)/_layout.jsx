import { StyleSheet } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from '@/components/header/Header';
import SideMenu from '@/components/sideMenu/SideMenu';

export default function Layout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Drawer
        drawerContent={(props) => <SideMenu {...props} />}
        screenOptions={{
          header: (props) => <Header {...props} />,
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Inicio',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
