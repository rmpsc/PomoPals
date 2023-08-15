import React, { useState, useEffect } from 'react';
import { Stack, Text, Button } from 'tamagui';
/* https://tamagui.dev/docs/core/stack-and-text  */
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

interface PomodoroSoloProps {}

const PomodoroSolo: React.FC<PomodoroSoloProps> = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [startButtonText, setStartButtonText] = useState('Start');
    const [pomodoroTimerMin, setPomodoroTimerMin] = useState(25);

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

    const handleTimerIncrease = () => {
      setPomodoroTimerMin(pomodoroTimerMin + 5)
    };

    const handleTimerDecrease = () => {
      if (pomodoroTimerMin > 5) {
        setPomodoroTimerMin(pomodoroTimerMin - 5)
      };
    };

    return (
        <Stack paddingHorizontal={25}>
          <Stack theme="light">
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
            <Stack fd='row' ai='center' jc='center'>
              <Button
                size={40}
                margin={10}
                backgroundColor={'white'}
                shadowColor={'$black'}
                shadowRadius={2}
                shadowOpacity={.1}
                onPress={handleTimerDecrease}>
                <Text c='$black' fontSize={'$2'}>-</Text>
              </Button>
              <Text c='$black' fontSize={'$2'}>Length</Text>
              <Button
                size={40}
                margin={10}
                backgroundColor={'white'}
                shadowColor={'$black'}
                shadowRadius={2}
                shadowOpacity={.1}
                onPress={handleTimerIncrease}>
                <Text c='$black' fontSize={'$2'}>+</Text>
              </Button>
            </Stack>
          </Stack>
          <Stack ai='center'>
            <CountdownCircleTimer 
              isPlaying={isPlaying}
              duration={pomodoroTimerMin}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[pomodoroTimerMin, pomodoroTimerMin * .50, pomodoroTimerMin * .25, 0]}
            >
              {({ remainingTime }) => <Text color={'$tomato'} fontSize={'$6'}>{remainingTime}</Text>}
              </CountdownCircleTimer>
          </Stack>
        </Stack>
    )
}

export default PomodoroSolo;