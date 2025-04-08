import GroupPreview from "@/src/components/groupPreview";
import colors from "@/src/constants/colors";
import { useAuthStore } from "@/src/context/authContext";
import { useRouter } from "expo-router";
import { EllipsisVertical, Search } from "lucide-react-native";
import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const router = useRouter();
  const { logout } = useAuthStore();

  async function handleLogout() {
    await logout();
    router.replace("/");
  }

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
      <View className="px-3 pt-5 bg-white flex-1">
        <View className="flex gap-5 h-full">
          <View className="flex justify-between items-center flex-row">
            <View>
              <Text className="text-xs block">Hello,</Text>
              <Text className="block text-xl font-semibold">Vinicius</Text>
            </View>
            <View className="flex gap-2 flex-row">
              <Pressable className="border border-gray-500 rounded-full p-2">
                <Search className="text-gray-500" />
              </Pressable>
              <Pressable className="border border-gray-500 rounded-full p-2">
                <EllipsisVertical className="text-gray-500" />
              </Pressable>
            </View>
          </View>

          <ScrollView>
              <View className="flex flex-col gap-6">
                {[...Array(10)].map((_, i) => (
                    <GroupPreview key={i} data={{
                    name: `Grupo ${i+1}`,
                    adm: "Vinicius",
                    description: "Descrição exemplo",
                    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    id: `${i}`
                    }}/>
                ))}
              </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}