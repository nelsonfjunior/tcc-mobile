import { useRouter } from "expo-router";
import { ArrowLeft, EllipsisVertical } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

export default function Group() {
   const route = useRouter()

   function handleBackPage() {
      route.replace('/(painel)/home')
   }

  return (
    <>
      <View className="bg-white w-full h-[70px] flex flex-row items-center gap-4 py-5 px-3 text-gray-900 border-b shadow-[0_0_10px_rgba(0,0,0,0.05)] border-b-gray-200">
        <Pressable onPress={handleBackPage}>
          <ArrowLeft />
        </Pressable>
        <View className="flex-1 flex flex-row items-center gap-4">
          <Image
            className="rounded-full w-10 h-10"
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />
          <Text className="text-xl text-gray-900">Grupo tal</Text>
        </View>
        <View className="flex flex-row gap-3 text-gray-900">
          <Pressable>
            <EllipsisVertical />
          </Pressable>
        </View>
      </View>

      <View className="border-1 border-red-700 w-full grid grid-cols-3 flex-wrap justify-center gap-2 mt-8 px-4">
        <View>
          <Image
            className="w-full h-[120px] rounded-2xl mb-1"
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />

          <Text className="text-lg font-medium text-gray-900">Fotos 1</Text>
          <Text className="text-sm text-gray-600">3 fotos</Text>
        </View>
        <View>
          <Image
            className="w-full h-[120px] rounded-2xl mb-1"
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />

          <Text className="text-lg font-medium text-gray-900">Fotos 1</Text>
          <Text className="text-sm text-gray-600">3 fotos</Text>
        </View>
        <View>
          <Image
            className="w-full h-[120px] rounded-2xl mb-1"
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          />

          <Text className="text-lg font-medium text-gray-900">Fotos 1</Text>
          <Text className="text-sm text-gray-600">3 fotos</Text>
        </View>
      </View>
    </>
  );
}
