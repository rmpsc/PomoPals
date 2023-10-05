import React from 'react'
import { Button, Text, Stack, YStack } from 'tamagui';
import { removeAccessToken, removeRefreshToken } from '../services/AuthenticationServices';

interface SettingsPageProps {navigation}

const SettingsPage: React.FC<SettingsPageProps> = ({navigation}) => {
    return (
        <Stack bg="white" theme="light" paddingHorizontal={25} paddingTop={60} paddingBottom={20} f={1} fd={'column'}>
            <YStack theme="orange_active_Button" opacity={1}>
                <Button size="$6" onPress={() => {
                    removeAccessToken();
                    removeRefreshToken();
                    navigation.navigate('LoginPage')
                }}>
                    <Text color="white" fontSize={'$2'} fontWeight={'$1'}>Log out</Text>
                </Button>
            </YStack>
        </Stack>
    );
}

export default SettingsPage;