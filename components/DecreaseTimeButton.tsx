import React from 'react'
import { Button, Text } from 'tamagui';
 
const DecreaseTimeButton: React.FC = () => {
  return (
    <Button
        shadowColor={'black'}
        shadowOpacity={.2}
        shadowRadius={1}
        shadowOffset={{ width: 0, height: 1 }}
        theme='red'
        size={30}
        bg={'#FFD6D6'}
        margin={5}
    >
        <Text style={{fontFamily: 'WorkSans-Black'}}> - </Text>
    </Button>
  );
}
 
export default DecreaseTimeButton;