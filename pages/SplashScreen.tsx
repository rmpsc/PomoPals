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
      <ActivityIndicator size={'large'} color={'red'} />
    </YStack>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120, // Set the desired width
    height: 120, // Set the desired height
    marginVertical: 100,
  },
});
export default SplashScreen;