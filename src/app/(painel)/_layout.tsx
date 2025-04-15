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
                    title: "Grupos",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="publicacoes"
                options={{
                    title: "Publicações",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'people-sharp' : 'people-outline'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="photo"
                options={{
                    title: "Photos",
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'camera-sharp' : 'camera-outline'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}
