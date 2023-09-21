import React from 'react';
import { Button, Stack, Text } from 'tamagui';
/* https://tamagui.dev/docs/core/stack-and-text  */

interface PomodoroGroupProps {}

const PomodoroGroup: React.FC<PomodoroGroupProps> = () => {
    return (
        <Stack bg="white" paddingHorizontal={25}>
            <Text color='black' fontSize={'$1'} fontWeight={'$6'}>Room ID: 123</Text>
            <Text color='$grey' fontSize={'$2'}>Invite your friends or join them!</Text>
            <Stack theme='light'>
                <Button
                size={90}
                marginVertical={10}
                bg={'white'}
                shadowColor={'black'}
                shadowRadius={2}
                shadowOpacity={.1}>
                <Text color='black' fontSize={'$2'}>Invite</Text>
                </Button>
                <Button
                size={90}
                marginVertical={10}
                bg={'white'}
                shadowColor={'black'}
                shadowRadius={2}
                shadowOpacity={.1}>
                <Text color='black' fontSize={'$2'}>Join</Text>
                </Button>
            </Stack>
        </Stack>
    )
}

export default PomodoroGroup;