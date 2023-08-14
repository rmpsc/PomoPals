import React, { useState, useEffect } from 'react';
import { Stack, Text, Button } from 'tamagui';
/* https://tamagui.dev/docs/core/stack-and-text  */
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

interface PomodoroSoloProps {}

const PomodoroSolo: React.FC<PomodoroSoloProps> = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [startButtonText, setStartButtonText] = useState('Start');

    useEffect(() => {
      if (isPlaying) {
        setStartButtonText('Pause')
      } else {
        setStartButtonText('Start')
      }
    }, [isPlaying]);

    const handleButtonPress = () => {
      setIsPlaying(!isPlaying);
    };

    return (
        <Stack ai={'center'}>
            <Button onPress={handleButtonPress}>{startButtonText}</Button>
            <CountdownCircleTimer
                isPlaying={isPlaying}
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