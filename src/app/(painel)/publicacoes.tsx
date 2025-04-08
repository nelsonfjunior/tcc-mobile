import PublishPreview from '@/src/components/publishPreview';
import { EllipsisVertical, Search } from 'lucide-react-native';
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function Publicacoes() {
 return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']}>
    <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 24 }}>
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
            <View className="flex flex-col gap-5">
                <PublishPreview name='Vinícius Fazolo' profileImage='https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' publishImage='https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
            </View>
        </ScrollView>
      </View>
    </View>
  </SafeAreaView>
  );
}