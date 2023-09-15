import React, { useState, useEffect } from 'react';
import { Stack, Text, Button, Input, XStack, YStack } from 'tamagui';
/* https://tamagui.dev/docs/core/stack-and-text  */
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

interface PomodoroSoloProps {}

const PomodoroSolo: React.FC<PomodoroSoloProps> = () => {

    const [startButtonText, setStartButtonText] = useState('Start');
    const [topText, setTopText] = useState('You got this!');

    const [isPlaying, setIsPlaying] = useState(false);
    const [isOnBreak, setIsOnBreak] = useState(false);

    const [pomodoroTimerMin, setPomodoroTimerMin] = useState(2);
    const [breakTimerMin, setBreakTimerMin] = useState(5);
    const [displayedTimeMin, setDisplayedTimeMin] = useState(pomodoroTimerMin);
    const [resetKey, setResetKey] = useState(0);

    useEffect(() => {
      if (isPlaying) {
        setStartButtonText('Pause');
      } else {
        setStartButtonText('Start')
      }
    }, [isPlaying]);
    
    useEffect(() => {
      if (isOnBreak) {
        setDisplayedTimeMin(breakTimerMin);
      } else {
        setDisplayedTimeMin(pomodoroTimerMin);
      }
    }, [pomodoroTimerMin, breakTimerMin]);

    const handleButtonPress = () => {
      setIsPlaying(!isPlaying);
    };

    const handlePomoTimeIncrease = () => {
      setPomodoroTimerMin(pomodoroTimerMin + 1)
    };

    const handlePomoTimeDecrease = () => {
      if (pomodoroTimerMin > 1) {
        setPomodoroTimerMin(pomodoroTimerMin - 1)
      }
    };

    const handleBreakTimeIncrease = () => {
      setBreakTimerMin(breakTimerMin + 1)
    };

    const handleBreakTimeDecrease = () => {
      if (breakTimerMin > 1) {
        setBreakTimerMin(breakTimerMin - 1)
      }
    };

    const handleTimerComplete = () => {
      setIsPlaying(false);
      if (isOnBreak) {
        console.log('finished break!')
        setIsOnBreak(false)
        setTopText('Keep going, you got this!')
        setDisplayedTimeMin(pomodoroTimerMin)
      } else {
        console.log('about to start a break!')
        setIsOnBreak(true);
        setTopText('You deserve a break!')
        setDisplayedTimeMin(breakTimerMin)
      }
      setResetKey(resetKey + 1);
    };

    return (
        <Stack paddingHorizontal={25} theme='light'>
          <Stack paddingVertical={30}>
            <Text color='black' fontSize={'$1'} fontWeight={'$6'}>
              {topText}
            </Text>
          </Stack>
          <YStack>
            <XStack p={10} ai='center' jc='center'>
              <Text paddingHorizontal={5} color='black' fontSize={'$2'}>Pomo</Text>
              <Input
                size='$2'
                value={pomodoroTimerMin.toString()}
                onChangeText={(e) => {
                  setPomodoroTimerMin(Number(e))
                  setResetKey(resetKey + 1);
                }}
              />
              <Button
                size='$2'
                margin={5}
                backgroundColor={'white'}
                shadowColor={'black'}
                shadowRadius={2}
                shadowOpacity={.1}
                onPress={handlePomoTimeDecrease}>
                <Text color='black' fontSize={'$2'}>-</Text>
              </Button>
              <Button
                size='$2'
                margin={5}
                backgroundColor={'white'}
                shadowColor={'black'}
                shadowRadius={2}
                shadowOpacity={.1}
                onPress={handlePomoTimeIncrease}>
                <Text color='black' fontSize={'$2'}>+</Text>
              </Button>
            </XStack>
            <XStack p={10} ai='center' jc='center'>
              <Text paddingHorizontal={5} color='black' fontSize={'$2'}>
                Break
              </Text>
              <Input
                size='$2'
                value={breakTimerMin.toString()}
                onChangeText={(e) => {
                  setBreakTimerMin(Number(e))
                  setResetKey(resetKey + 1);
                }}
              />
              <Button
                size='$2'
                margin={5}
                backgroundColor={'white'}
                shadowColor={'black'}
                shadowRadius={2}
                shadowOpacity={.1}
                onPress={handleBreakTimeDecrease}>
                <Text color='black' fontSize={'$2'}>-</Text>
              </Button>
              <Button
                size='$2'
                margin={5}
                backgroundColor={'white'}
                shadowColor={'black'}
                shadowRadius={2}
                shadowOpacity={.1}
                onPress={handleBreakTimeIncrease}>
                <Text color='black' fontSize={'$2'}>+</Text>
              </Button>
            </XStack>
          </YStack>
          <Stack ai='center'>
            <CountdownCircleTimer
              key={resetKey}
              isPlaying={isPlaying}
              duration={displayedTimeMin}
              colors={['#004777', '#F7B801', '#A30000', '#A30000']}
              colorsTime={[displayedTimeMin, displayedTimeMin * .50, displayedTimeMin * .25, 0]}
              onComplete={handleTimerComplete}
            >
              {({ remainingTime }) =>
                <Text color={'black'} fontSize={'$6'}>
                  {remainingTime}
                </Text>
              }
            </CountdownCircleTimer>
            <Button
              size={90}
              marginVertical={10}
              backgroundColor={'white'}
              shadowColor={'black'}
              shadowRadius={2}
              shadowOpacity={.1}
              onPress={handleButtonPress}>
              <Text color='black' fontSize={'$2'}>{startButtonText}</Text>
            </Button>
          </Stack>
        </Stack>
    )
}

export default PomodoroSolo;