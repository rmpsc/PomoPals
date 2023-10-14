import React from 'react'
import { Button, Text } from 'tamagui';
interface FocusButtonProps {
  text: string,
  page: string,
  navigation
}
 
const FocusButton: React.FC<FocusButtonProps> = ({text, page, navigation}) => {
  return (
    <Button
      f={1}
      size={90}
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