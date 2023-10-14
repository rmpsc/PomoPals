import React from 'react'
import { Button, Text } from 'tamagui';
interface FocusButtonProps {
  text: string,
  page: string,
  color: string,
  navigation
}
 
const FocusButton: React.FC<FocusButtonProps> = ({text, page, color, navigation}) => {
  return (
    <Button
      f={1}
      marginHorizontal={10}
      size={190}
      bg={color}
      mb={10}
      shadowColor={'black'}
      shadowRadius={2}
      shadowOpacity={.1}
      onPress={() =>
          navigation.navigate(page)
      }
    >
      <Text color='black' fontSize={'$2'}>{text}</Text>
    </Button>
  );
}
 
export default FocusButton;