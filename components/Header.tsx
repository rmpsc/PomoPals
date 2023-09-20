import React from 'react';
import { FontWeightTokens, Text } from 'tamagui';

interface HeaderProps {
    title: string;
    weight?: FontWeightTokens;
}
 
const Header: React.FC<HeaderProps> = ({ title, weight }) => {
    return (
        <Text paddingVertical={5} color='black' fontSize={'$1'} fontWeight={weight}>
          {title}
        </Text>
    );
}
 
export default Header;