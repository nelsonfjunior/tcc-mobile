import React from "react";
import { Stack, Tabs } from "expo-router";
import { Aperture, UserPlus, Users } from "lucide-react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIconStyle: {
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Tabs.Screen
        name="add-participant/index"
        options={{
          title: "",
          tabBarIcon: () => <UserPlus className="text-gray-600" size={30} />,
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
        }}
      />
      <Tabs.Screen
        name="camera/index"
        options={{
          title: "",
          tabBarIcon: () => <Aperture className="text-gray-600" size={50} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="participants/index"
        options={{
          title: "",
          tabBarIcon: () => <Users className="text-gray-600" size={30} />,
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
        }}
      />

      <Tabs.Screen
        name="[id]"
        options={{ href: null }}
      />
      <Tabs.Screen
        name="add-album/index"
        options={{ href: null, tabBarStyle: { display: "none" } }}
      />
      <Tabs.Screen
        name="album/[id]"
        options={{ href: null, tabBarStyle: { display: "none" } }}
      />
    </Tabs>
  );
}
