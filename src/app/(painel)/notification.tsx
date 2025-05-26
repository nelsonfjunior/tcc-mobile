import { useRouter } from "expo-router";
import { ArrowLeft, Check, UserPlus, X } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

export default function Notification() {
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
      </View>

      <View className="px-5 mt-8">
        <View className="flex flex-row gap-2 mb-4">
          <Pressable className="w-max h-max rounded-3xl px-3 border border-gray-200 bg-gray-200">
            <Text className="text-gray-600 text-sm">Todos</Text>
          </Pressable>
          <Pressable className="w-max h-max rounded-3xl px-3 border border-gray-200">
            <Text className="text-gray-600 text-sm">Não lidos</Text>
          </Pressable>
        </View>

        <View className="flex flex-row items-start gap-4">
          <View className="w-8 h-8 bg-gray-600 rounded-full"></View>
          <View className="flex flex-col flex-1 gap-2">
            <Text className="text-gray-900">
              <Text className="text-gray-900 font-semibold">
                teste@gmail.com
              </Text>{" "}
              te convido para fazer parte do grupo tal
            </Text>

            <View className="flex flex-row gap-1">
              <Pressable>
                <Text className="flex items-center gap-1 w-max px-3 py-1 text-xs bg-green-200 text-green-600 rounded-lg">
                  <Check />
                  Aceitar
                </Text>
              </Pressable>
              <Pressable>
                <Text className="flex items-center gap-1 w-max px-3 py-1 text-xs bg-gray-200 text-gray-600 rounded-lg">
                  <X />
                  Recusar
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
