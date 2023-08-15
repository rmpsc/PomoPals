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
        <Stack paddingHorizontal={25}>
          <Stack theme="light_red">
            <Button
              size={90}
              marginVertical={10}
              backgroundColor={'white'}
              shadowColor={'$black'}
              shadowRadius={2}
              shadowOpacity={.1}
              onPress={handleButtonPress}>
              <Text c='$black' fontSize={'$2'}>{startButtonText}</Text>
            </Button>
          </Stack>
          <Stack ai='center'>
            <CountdownCircleTimer 
              isPlaying={isPlaying}
              duration={7}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[7, 5, 2, 0]}
            >
              {({ remainingTime }) => <Text color={'$tomato'} fontSize={'$6'}>{remainingTime}</Text>}
              </CountdownCircleTimer>
          </Stack>
        </Stack>
    )
}

export default PomodoroSolo;