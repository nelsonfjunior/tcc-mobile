import Stack from "@/src/components/stack";
import { useRouter } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    id: "1",
    perfil: "https://reactnative.dev/img/tiny_logo.png",
    name: "Vinícius Fazolo",
    date: "12/04/2025 12:25",
    description:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    image:
      "https://149616941.v2.pressablecdn.com/wp-content/uploads/2021/04/SRV-working-with-older-people-thumbnail.jpg",
  },
  {
    id: "2",
    perfil: "https://reactnative.dev/img/tiny_logo.png",
    name: "Nelson Fazolo",
    date: "13/04/2025 15:25",
    description:
      "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    image:
      "https://149616941.v2.pressablecdn.com/wp-content/uploads/2021/04/SRV-working-with-older-people-thumbnail.jpg",
  },
];

export default function Album() {
  const route = useRouter();

  function renderItem({ item }: any) {
    return (
      <View className="flex flex-col gap-4 mb-8">
        <View className="flex flex-row gap-4 items-center w-full justify-start">
          <Image
            className="rounded-full w-12 h-12"
            source={{ uri: `${item.perfil}` }}
          />

          <View>
            <Text className="font-medium text-base text-gray-900">
              {item.name}
            </Text>
            <Text className="text-xs text-gray-900">{item.date}</Text>
          </View>
        </View>

        <Text className="text-gray-900">{item.description}</Text>

        <Pressable className="w-full h-72">
          <Image
            className="w-full h-full rounded-2xl mb-1"
            source={{
              uri: `${item.image}`,
            }}
          />
        </Pressable>
      </View>
    );
  }

  function handleBackPage() {
    route.replace("/(painel)/home");
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex flex-1 bg-[#F6F6F6]">
        <Stack href={"/(painel)/home"}>
          <Image
            className="rounded-full w-10 h-10 ml-2"
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
        </Stack>

        <View className="flex-1 px-4">
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={
              <Text className="mt-4 mb-4 text-gray-600 text-xs">Total de 2 fotos</Text>
            }
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
