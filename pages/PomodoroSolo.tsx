import React from 'react';
import { Stack, Text, Button } from 'tamagui';
/* https://tamagui.dev/docs/core/stack-and-text  */
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

interface PomodoroSoloProps {}

const PomodoroSolo: React.FC<PomodoroSoloProps> = () => {
    return (
        <Stack ai={'center'}>
            <Button>Start</Button>
            <CountdownCircleTimer
                isPlaying={true}
                duration={7}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
            >
                {({ remainingTime }) => <Text color={'$tomato'} fontSize={'$6'}>{remainingTime}</Text>}
            </CountdownCircleTimer>
        </Stack>
    )
}

export default PomodoroSolo;