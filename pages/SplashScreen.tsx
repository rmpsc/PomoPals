import React from 'react';
import { ActivityIndicator, Image, StyleSheet } from 'react-native';
import { YStack } from 'tamagui';

function SplashScreen() {
  return (
    <YStack bg="white" f={1} ai='center' jc='center'>
      <Image
        source={require('../assets/tomapal.png')}
        style={styles.image}
      />
      <ActivityIndicator color={'white'} />
    </YStack>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200, // Set the desired width
    height: 200, // Set the desired height
  },
});
export default SplashScreen;