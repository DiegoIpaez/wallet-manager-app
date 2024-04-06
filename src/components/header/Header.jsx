import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { COLORS } from '@/constants';
import StatusBar from '../statusBar/StatusBar';

export default function Header({ navigation, showBackButton = false }) {
  const goBack = () => {
    if (!navigation.canGoBack()) return;
    navigation.goBack();
  };

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.iconStart}>
          {!showBackButton ? (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <FontAwesome name={'menufold'} style={styles.icon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={goBack}>
              <MaterialIcons name={'arrow-back-ios-new'} style={styles.icon} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.iconCenter}>
          <Text style={styles.textHome}>WalletManager</Text>
        </View>
        <View style={styles.iconEnd}></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.backgroundSecondary,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  icon: {
    color: COLORS.ligth,
    fontSize: 20,
  },
  iconCenter: {
    alignItems: 'center',
    flex: 1,
  },
  iconEnd: {
    alignItems: 'flex-end',
    flex: 1,
  },
  iconStart: {
    alignItems: 'flex-start',
    flex: 1,
  },
  textHome: {
    color: COLORS.ligth,
    fontSize: 16,
    fontWeight: '600',
  },
});
