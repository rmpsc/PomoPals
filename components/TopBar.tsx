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
    <XStack f={1} bg='white' jc='space-between' ai='center' paddingHorizontal={25} paddingTop={60} paddingBottom={10} borderColor={'lightgray'} borderBottomWidth={.3}>
      <YStack>
        <Text color='black' opacity={.6} fontSize={20} fontWeight={'400'}>
          Hello,
        </Text>
        <XStack ai='center'>
          <Text paddingRight={10} color='black' fontSize={25} fontWeight={'$6'}>
            {firstName}
          </Text>
          <Image
            source={require('../assets/hand-wave.png')}
            style={styles.image}
          />
        </XStack>
      </YStack>
      <XStack>
        <Ionicons name="md-person-circle" size={30} color={'black'} onPress={() =>
          navigation.navigate('Profile')
        }/>
      </XStack>
    </XStack>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});

export default TopBar;