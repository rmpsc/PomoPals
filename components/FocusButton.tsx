import React from 'react'
import { Button, Text, YStack } from 'tamagui';
import FocusIcon from './FocusIcon';
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
        <Text color='black' fontSize={25} fontWeight={'600'} >{text}</Text>
      </YStack>
    </Button>
  );
}
 
export default FocusButton;