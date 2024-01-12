import React from 'react'
import { Button, Text, YStack } from 'tamagui';
import FocusIcon from './FocusIcon';
import { widths } from '@tamagui/config';
interface FocusButtonProps {
  text: string,
  page: string,
  icon: string,
  color: string,
  accent: string,
  navigation
}
 
const FocusButton: React.FC<FocusButtonProps> = ({text, page, icon, color, accent, navigation}) => {
  return (
    <Button
      shadowColor={'black'}
      shadowOpacity={.2}
      shadowRadius={1}
      shadowOffset={{ width: 0, height: 1 }}
      theme='blue'
      f={.45}
      size={190}
      bg={color}
      mb={10}
      onPress={() =>
          navigation.navigate(page)
      }
    >
      <YStack ai="center">
        <FocusIcon icon={icon} color={accent}/>
        <Text color='black' style={{ fontFamily: 'WorkSans-Var', fontSize: 25 }} >{text}</Text>
      </YStack>
    </Button>
  );
}
 
export default FocusButton;