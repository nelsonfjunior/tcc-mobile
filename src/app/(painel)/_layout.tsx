import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '@/src/constants/colors';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors['brown-red'],
                headerStyle: {
                    backgroundColor: colors.white,
                },
                headerShadowVisible: false,
                headerTintColor: colors['brown-dark'],
                tabBarStyle: {
                    backgroundColor: colors.white,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="grupos"
                options={{
                    title: 'Grupos',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'people-sharp' : 'people-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}
