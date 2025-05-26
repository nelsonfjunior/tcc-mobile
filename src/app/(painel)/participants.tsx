import { useRouter } from "expo-router";
import { ArrowLeft, UserPlus } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

export default function Participants() {
  const route = useRouter();

  function handleBackPage() {
    route.replace("/(painel)/home");
  }

  return (
    <>
      <View className="bg-white w-full h-[70px] flex flex-row items-center gap-4 py-5 px-3 text-gray-900 border-b shadow-[0_0_10px_rgba(0,0,0,0.05)] border-b-gray-200">
        <Pressable
          onPress={handleBackPage}
          className="flex flex-row items-center gap-2 flex-1"
        >
          <ArrowLeft className="text-gray-900" />
          <Text className="text-gray-900">Voltar</Text>
        </Pressable>
        <Pressable>
            <UserPlus className="text-gray-900"/>
        </Pressable>
      </View>

      <View className="mt-8 flex flex-col gap-2 px-5">
        <Text className="font-semibold text-gray-900">Participantes: 3</Text>
        <View className="flex flex-col gap-2">
          <View className="flex flex-row items-center gap-4">
            <View className="w-8 h-8 bg-gray-600 rounded-full"></View>
            <Text className="text-sm text-gray-900">
              teste@gmail.com
            </Text>
          </View>
          <View className="flex flex-row items-center gap-4">
            <Image
              className="rounded-full w-8 h-8"
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            />
            <Text className="flex-1 text-sm text-gray-900">
              Vinícius Fazolo (Você)
            </Text>
            <Text className="px-3 py-1 text-xs bg-green-200 text-green-600 rounded-3xl">
              Admin
            </Text>
          </View>
          <View className="flex flex-row items-center gap-4">
            <Image
              className="rounded-full w-8 h-8"
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            />
            <Text className="text-sm text-gray-900">
              nelsonfrjunior@gmail.com
            </Text>
          </View>
        </View>
      </View>
    </>
  );
}
