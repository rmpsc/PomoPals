import React from 'react'
import { Stack, Text } from 'tamagui';
import Ionicons from '@expo/vector-icons/Ionicons'

interface FocusIconProps {
    icon,
    color: string
}
 
const FocusIcon: React.FC<FocusIconProps> = ({icon, color}) => {
    return (
        <Stack theme={'light'} bg={"white"} borderRadius={15} margin={5}>
            <Ionicons padding={15} name={icon} size={40} color={color}/>
        </Stack>
    );
}
 
export default FocusIcon;