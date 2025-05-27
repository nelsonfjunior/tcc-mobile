import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";
import { Props } from "./interface/props";

export default function Stack({children, href}: Props) {
    const router = useRouter()

    function handleBackPage(){
        router.replace(href)
    }

  return (
    <View className="bg-white w-full h-[70px] flex flex-row items-center gap-2 py-5 px-3 text-gray-900 border-b shadow-[0_0_10px_rgba(0,0,0,0.05)] border-b-gray-200">
      <Pressable
        onPress={handleBackPage}
        className="flex flex-row items-center gap-2"
      >
        <ArrowLeft className="text-gray-900" />
      </Pressable>

      {children}
    </View>
  );
}
