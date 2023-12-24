import React from 'react'
import { XStack, YStack, Text, Stack } from 'tamagui'
import Ionicons from '@expo/vector-icons/Ionicons'

interface TopNavBarProps {
    pageName: string,
    navigation
}
 
const TopNavBar: React.FC<TopNavBarProps> = ({pageName, navigation}) => {
    return (
        <XStack f={1} bg='white' paddingHorizontal={25} paddingTop={60} paddingBottom={10} borderColor={'lightgray'} borderBottomWidth={.3}>
            <Ionicons name="md-arrow-back" size={25} color={'black'} onPress={() =>
                navigation.navigate('Homepage')
            }/>
            <XStack jc='center'>
                <Text color={'black'}>
                    {pageName}
                </Text>
            </XStack>
            
        </XStack>
    );
}
 
export default TopNavBar;