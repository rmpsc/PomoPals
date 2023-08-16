import React, { useState, useEffect } from 'react';
import { Stack, Text, Button } from 'tamagui';
/* https://tamagui.dev/docs/core/stack-and-text  */
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

interface PomodoroSoloProps {}

const PomodoroSolo: React.FC<PomodoroSoloProps> = () => {

    const [topText, setTopText] = useState('You got this!');
    const [isPlaying, setIsPlaying] = useState(false);
    const [isOnBreak, setIsOnBreak] = useState(false);
    const [startButtonText, setStartButtonText] = useState('Start');
    const [pomodoroTimerMin, setPomodoroTimerMin] = useState(5);
    const [breakTimerMin, setBreakTimerMin] = useState(5);
    const [globalTimerMin, setGlobalTimerMin] = useState(pomodoroTimerMin);
    const [resetKey, setResetKey] = useState(0);

    useEffect(() => {
      if (isPlaying) {
        setStartButtonText('Pause');
        setIsOnBreak(false);
      } else {
        setStartButtonText('Start')
      }
    }, [isPlaying]);

    useEffect(() => {
      if (isOnBreak) {
        setResetKey(resetKey + 1);
      }
    }, [isOnBreak]);

    const handleButtonPress = () => {
      setIsPlaying(!isPlaying);
    };

    const handleTimerIncrease = () => {
      setGlobalTimerMin(globalTimerMin + 5)
    };

    const handleTimerDecrease = () => {
      if (pomodoroTimerMin > 5) {
        setGlobalTimerMin(globalTimerMin - 5)
      };
    };

    const handleCurrentAcivity = () => {
      if (isOnBreak) {
        return breakTimerMin;
      } else {
        return pomodoroTimerMin;
      }
    };

    return (
        <Stack paddingHorizontal={25} theme='light'>
          <Stack paddingVertical={30}>
            <Text c='$black' fontSize={'$1'} fontWeight={'$6'}>
              {topText}
            </Text>
          </Stack>
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
          <Stack ai='center'>
            <CountdownCircleTimer
              key={resetKey}
              isPlaying={isPlaying}
              duration={globalTimerMin}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[globalTimerMin, globalTimerMin * .50, globalTimerMin * .25, 0]}
              onComplete={() => {
                setIsPlaying(false);
                setIsOnBreak(true);
                setTopText('You deserve a break!')
                setGlobalTimerMin(breakTimerMin)
              }}
            >
              {({ remainingTime }) =>
                <Text color={'$tomato'} fontSize={'$6'}>
                  {remainingTime}
                </Text>
              }
            </CountdownCircleTimer>
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
        </Stack>
    )
}

export default PomodoroSolo;