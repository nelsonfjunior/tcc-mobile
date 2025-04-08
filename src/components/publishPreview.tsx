import { Ellipsis, MessageCircleMore } from 'lucide-react-native';
import { Image, Pressable, Text, View } from 'react-native';

type Props = {
    profileImage: string,
    name: string,
    publishImage: string
}

export default function PublishPreview({name, publishImage, profileImage}: Props) {
 return (
   <Pressable className='flex gap-2'>
        <View className='flex flex-row items-center'>
            <Image className='mr-2 w-10 h-10 rounded-full' source={{uri: profileImage}}/>
            <View className='flex-1'>
                <Text className='text-gray-700 font-semibold'>{name}</Text>
                <Text className='text-gray-500 text-xs'>Grupo 1</Text>
            </View>
            <Pressable className="border border-gray-500 rounded-full p-1">
                <Ellipsis className="text-gray-500" size={16}/>
            </Pressable>
        </View>
        <Text className='text-gray-500'>
            Essa imagem mostra uma bela vista das montanhas
        </Text>
        <Image className='rounded-lg h-52 w-full' source={{uri: publishImage}}/>
        <Pressable className='flex flex-row items-center gap-1'>
            <MessageCircleMore className='text-gray-500'/>
            <Text className='text-gray-500 text-xs'>255</Text>
        </Pressable>
   </Pressable>
  );
}