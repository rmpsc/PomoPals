import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { XStack, YStack, Text } from 'tamagui'
import Ionicons from '@expo/vector-icons/Ionicons'

interface TopBarProps {
    firstName: string,
    navigation
}
 
const TopBar: React.FC<TopBarProps> = ({firstName, navigation}) => {
  return (
    <XStack jc='space-between' ai='flex-end'>
      <YStack>
        <Text color='grey' fontSize={20} fontWeight={'300'}>
          Hello,
        </Text>
        <XStack ai='center'>
          <Text paddingRight={10} color='black' fontSize={35} fontWeight={'$6'}>
            {firstName}
          </Text>
          <Image
            source={require('../assets/tomapal.png')}
            style={styles.image}
          />
        </XStack>
      </YStack>
      <XStack>
        <Ionicons name="md-person-circle-outline" size={60} color={'black'} onPress={() =>
          navigation.navigate('Profile')
        }/>
      </XStack>
    </XStack>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default TopBar;