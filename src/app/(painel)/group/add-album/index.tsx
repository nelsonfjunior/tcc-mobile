import Stack from "@/src/components/stack";
import { useRouter } from "expo-router";
import { Check, ImagePlus } from "lucide-react-native";
import { Pressable, Text, TextInput, View } from "react-native";

export default function AddAlbum() {
  const route = useRouter();

  function handleBackPage() {
    route.replace("/(painel)/home");
  }

  return (
    <>
      <Stack href={"/(painel)/home"}>
        <Pressable onPress={handleBackPage}>
          <Text className="text-gray-900">Voltar</Text>
        </Pressable>
      </Stack>

      <View className="mt-8 flex gap-4 flex-col items-center px-4">
        <Pressable className="h-32 w-32 rounded-full bg-gray-200 flex justify-center items-center shadow-[0_0_10px_rgba(0,0,0,0.05)]"> 
          <ImagePlus size={50} className="text-gray-600"/>
          <Text className="text-gray-600"></Text>
        </Pressable>
        <TextInput
          className="shadow-[0_0_10px_rgba(0,0,0,0.05)] h-12 ml-2 px-4 w-full outline-none border border-gray-200 rounded-xl flex-row items-center bg-white text-gray-600"
          placeholder="Nome do álbum"
          value=""
        />
      </View>

      <Pressable className="absolute bottom-0 right-0 m-5 flex items-center justify-center rounded-full w-16 h-16 bg-green-900 text-green-100">
        <Check size={35}/>
      </Pressable>
    </>
  );
}
