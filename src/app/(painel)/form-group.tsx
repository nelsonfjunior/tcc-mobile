import { useRouter } from "expo-router";
import { ArrowLeft, Check } from "lucide-react-native";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function FormGroup() {
  const route = useRouter();

  function handleBackPage() {
    route.replace("/(painel)/home");
  }

  return (
    <>
      <View className="bg-white w-full h-[70px] flex flex-row items-center gap-4 py-5 px-3 text-gray-900 border-b shadow-[0_0_10px_rgba(0,0,0,0.05)] border-b-gray-200">
        <Pressable
          onPress={handleBackPage}
          className="flex flex-row items-center gap-2"
        >
          <ArrowLeft className="text-gray-900" />
          <Text className="text-gray-900">Voltar</Text>
        </Pressable>
      </View>

      <View className="mt-8 flex flex-row items-center px-5 h-12">
        <Image
          className="rounded-full w-11 h-11 shadow-[0_0_10px_rgba(0,0,0,0.05)]"
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
        <TextInput
          className="shadow-[0_0_10px_rgba(0,0,0,0.05)] flex-1 ml-2 px-4 h-full outline-none border border-gray-200 rounded-xl flex-row items-center bg-white text-gray-600"
          placeholder="Nome do grupo"
          value=""
        />
      </View>

      <View className="mt-8 flex flex-col px-5">
        <Text className="font-semibold block">Convite</Text>

        <View className="flex flex-row gap-2 mb-5">
          <TextInput
            className="shadow-[0_0_10px_rgba(0,0,0,0.05)] w-full h-12 px-4 outline-none border border-gray-200 rounded-xl flex-row items-center bg-white text-gray-600"
            placeholder="E-mail"
            value=""
          />
          <Pressable className="shadow-[0_0_10px_rgba(0,0,0,0.05)] bg-gray-200 px-3 h-12 flex items-center justify-center rounded-xl">
            <Text className="text-gray-600 w-max">Enviar</Text>
          </Pressable>
        </View>

        <View className="flex flex-col gap-2">
          <View className="flex flex-row items-center gap-4">
            <Image
              className="rounded-full w-8 h-8"
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            />
            <Text className="text-sm text-gray-900 font-semibold">
              Vinícius Fazolo (Você)
            </Text>
          </View>
          <View className="flex flex-row items-center gap-4">
            <Image
              className="rounded-full w-8 h-8"
              source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            />
            <Text className="text-sm text-gray-900">
              nelsonfrjunior@gmail.com (Enviado)
            </Text>
          </View>
        </View>
      </View>

      <Pressable className="absolute bottom-0 right-0 m-5 flex items-center justify-center rounded-full w-16 h-16 bg-green-900 text-green-100">
        <Check size={35}/>
      </Pressable>
    </>
  );
}
