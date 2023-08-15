import React from 'react';
import { Stack, Text, Button } from 'tamagui';
/* https://tamagui.dev/docs/core/stack-and-text  */

interface PomodoroGroupProps {}

const PomodoroGroup: React.FC<PomodoroGroupProps> = () => {
    return (
        <Stack paddingHorizontal={25}>
            <Text c='$black' fontSize={'$1'} fontWeight={'$6'}>Room ID: 123</Text>
            <Text c='$grey' fontSize={'$2'}>Invite your friends or join them!</Text>
            <Stack theme='light_red'>
                <Button
                size={90}
                marginVertical={10}
                backgroundColor={'white'}
                shadowColor={'$black'}
                shadowRadius={2}
                shadowOpacity={.1}>
                <Text c='$black' fontSize={'$2'}>Invite</Text>
                </Button>
                <Button
                size={90}
                marginVertical={10}
                backgroundColor={'white'}
                shadowColor={'$black'}
                shadowRadius={2}
                shadowOpacity={.1}>
                <Text c='$black' fontSize={'$2'}>Join</Text>
                </Button>
            </Stack>
        </Stack>
    )
}

export default PomodoroGroup;