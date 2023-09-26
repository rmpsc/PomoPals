// Checks if a user is logged in to skip login/sign up pages
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserToken = async (token) => {
    try {
        await AsyncStorage.setItem('userToken', token);
    } catch (e) {
        console.log('Error storing token:', e);
        // TODO: handle unexpected api errors possibly due to network issues, storage, etc
    }
}

export const getUserToken = async () => {
    try {
        return await AsyncStorage.getItem('userToken');
    } catch (e) {
        console.log('error fetching token');
        // TODO: handle unexpected api errors possibly due to network issues, storage, etc
    }
}

// TODO: add other auth related functions (login, signup)