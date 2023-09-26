// Checks if a user is logged in to skip login/sign up pages
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserToken = async (token) => {
    try {
        await AsyncStorage.setItem('userToken', token);
    } catch (e) {
        // TODO: handle unexpected api errors possibly due to network issues, storage, etc
    }
}

export const getUserToken = async () => {
    try {
        await AsyncStorage.getItem('userToken');
    } catch (e) {
        // TODO: handle unexpected api errors possibly due to network issues, storage, etc
    }
}

// TODO: add other auth related functions (login, signup)