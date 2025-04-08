import { Ellipsis, MessageCircleMore } from 'lucide-react-native';
import { Image, Pressable, Text, View } from 'react-native';

type Props = {
    profileImage: string,
    name: string,
    publishImage: string
}

export default function PublishPreview({name, publishImage, profileImage}: Props) {
 return (
   <View className='flex gap-2'>
        <View className='flex flex-row'>
            <Image className='mr-10 w-10 h-10 rounded-full' source={{uri: profileImage}}/>
            <Text className='flex-1'>{name}</Text>
            <Pressable className="border border-gray-500 rounded-full p-1">
                <Ellipsis className="text-gray-500" size={16}/>
            </Pressable>
        </View>
        <Image className='rounded-lg h-52 w-full' source={{uri: publishImage}}/>
        <Pressable>
            <MessageCircleMore className='text-gray-500'/>
        </Pressable>
   </View>
  );
}