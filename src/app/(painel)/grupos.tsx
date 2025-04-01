import { CircleUserRound, Menu } from "lucide-react-native";
import React from "react";
import { View, Text, Image } from "react-native";
import GroupPreview from "../../components/groupPreview";

export default function Grupos() {
  return (
    <View>
      <View className="w-full bg-[#4a81e7] rounded-xl h-[100px] pt-10 px-5 pb-2.5 items-center justify-center">
        <View className="w-full flex-row justify-between items-center py-5 h-5">
          <Menu size={30} color="white" />
          <Text className="text-white text-base uppercase tracking-[2px]">
            Grupos
          </Text>
          <CircleUserRound size={30} color="white" />
        </View>
      </View>

      <View className="py-10 px-5 h-full gap-5">
        <GroupPreview
          data={{
            id: "1",
            adm: {},
            description: "teste",
            image: "https://images.unsplash.com/photo-1734249201319-e7227b1b4f54?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Grupo",
          }}
        />
        <GroupPreview
          data={{
            id: "1",
            adm: {},
            description: "teste",
            image: "",
            name: "Grupo",
          }}
        />
        <GroupPreview
          data={{
            id: "1",
            adm: {},
            description: "teste",
            image: "",
            name: "Grupo",
          }}
        />
      </View>
    </View>
  );
}
