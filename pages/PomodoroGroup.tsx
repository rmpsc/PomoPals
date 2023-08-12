import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, Button, Theme } from 'tamagui';
/* https://tamagui.dev/docs/core/stack-and-text  */

interface PomodoroGroupProps {}

const PomodoroGroup: React.FC<PomodoroGroupProps> = () => {
    return (
        <Stack ai={'center'}>
            <Text color='$tomato' fontSize={'$1'}>Room ID: Randomly Generated ID</Text>
            <Text color='$tomato' fontSize={'$1'}>Invite your friends or join them!</Text>
            <Button>Invite</Button>
            <Button>Join</Button>
        </Stack>
    )
}

export default PomodoroGroup;