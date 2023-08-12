import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, Button, Theme } from 'tamagui';
/* https://tamagui.dev/docs/core/stack-and-text  */

interface PomodoroSoloProps {}

const PomodoroSolo: React.FC<PomodoroSoloProps> = () => {
    return (
        <Stack ai={'center'}>
            <Button>Start</Button>
        </Stack>
    )
}

export default PomodoroSolo;