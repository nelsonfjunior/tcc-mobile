import { ImageIcon } from "lucide-react-native";
import { View, Image, Text } from "react-native";
import { Group } from "../interfaces/Group";

type Props = {
  data: Group;
};

export default function GroupPreview({ data }: Props) {
  return (
    <View className="flex flex-row justify-between items-center w-full py-2 px-1">
      <View className="flex flex-row items-center gap-4">
        {data.image ? (
          <Image
            className="w-10 h-10 rounded-full"
            source={{ uri: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}/>
        ) : (
          <View className="w-12 h-12 rounded-full bg-gray-200 items-center justify-center">
            <ImageIcon size={40} color="#6b7280" />
          </View>
        )}
        <View className="flex-1">
          <Text className="text-base font-medium">{data.name}</Text>
          <View className="flex flex-row items-center gap-1">
            <Text className="text-gray-500 text-xs">Vinícius:</Text>
            <ImageIcon size={15} color="#6b7280" />
          </View>
        </View>
      </View>
      <View className="flex items-center">
        <Text className="text-gray-400 text-xs mb-1">12:00</Text>
        <View className="rounded-full w-5 h-5 bg-blue-500 items-center justify-center">
          <Text className="text-white text-xs font-bold">2</Text>
        </View>
      </View>
    </View>
  );
}