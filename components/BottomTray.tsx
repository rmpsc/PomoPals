import React from 'react'
import { XStack, Text } from 'tamagui';

interface BottomTrayProps {
}

const BottomTray: React.FC<BottomTrayProps> = () => {
    return (
        <XStack f={1} paddingVertical={20} jc="space-between" ai="flex-end">
            <Text color={'black'}>Profile</Text>
            <Text color={'black'}>Track</Text>
            <Text color={'black'}>Study</Text>
            <Text color={'black'}>Groups</Text>
            <Text color={'black'}>More</Text>
        </XStack>
    );
}

export default BottomTray;