import React from 'react'
import { Button, Text } from 'tamagui';
 
const IncreaseTimeButton: React.FC = () => {
  return (
    <Button
        shadowColor={'black'}
        shadowOpacity={.2}
        shadowRadius={1}
        shadowOffset={{ width: 0, height: 1 }}
        theme='green'
        size={30}
        bg={'#BEEFB2'}
        margin={5}
    >
        <Text style={{fontFamily: 'WorkSans-Black'}}> + </Text>
    </Button>
  );
}
 
export default IncreaseTimeButton;