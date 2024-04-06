import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { COLORS } from '@/constants';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: COLORS.backgroundSecondary },
        headerShown: false,
      }}
      sceneContainerStyle={{ backgroundColor: COLORS.background }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Home',
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
