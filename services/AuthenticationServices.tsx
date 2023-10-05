// Checks if a user is logged in to skip login/sign up pages
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { useContext } from 'react';
import { UserContext } from '../pages/UserContext';

const supabase = createClient('https://broqnokklyltdgpeaakk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyb3Fub2trbHlsdGRncGVhYWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMDg0ODgsImV4cCI6MjAwNzg4NDQ4OH0.fgSWYn6f9Uv_nEypz_JMwl-AyVk4GILpiHzaVI1CEJk', {
    auth: {
      persistSession: true,
      storage: AsyncStorage
    }
  });


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

export const removeUserToken = async () => {
    try {
        await AsyncStorage.removeItem('userToken');
    } catch (e) {
        console.log('Error removing token:', e);
    }
}

export const storeRefreshToken = async (refreshToken) => {
    try {
        await AsyncStorage.setItem('refreshToken', refreshToken)
    } catch (e) {
        console.log('Error storing refresh token', e);
    }
}

export const getRefreshToken = async () => {
    try {
        return await AsyncStorage.getItem('refreshToken')
    } catch (e) {
        console.log('Error fetching refresh token', e);
    }
}

export const removeRefreshToken = async () => {
    try {
        await AsyncStorage.removeItem('refreshToken');
    } catch (e) {
        console.log('Error removing token', e);
    }
}

export const updateCurrentUser = async (setUser) => {
    const accessToken = await getUserToken();
    console.log('access token:', typeof(accessToken));
    console.log("Attempting to update current user with token:", accessToken.substring(0, 9))
    const { data: { user }, error } = await supabase.auth.getUser(accessToken)
    console.log('user:', user)
    if (error) {
      console.log("Error updating current user:", error)
      console.log("Attempting to fetch refresh token")
      const sessionDidRefreshSuccessfully = await fetchRefreshToken(setUser);
      if (!sessionDidRefreshSuccessfully) {
        return false
      }
      return true
    } else {
      const currentUser = {
        first_name: user.user_metadata.first_name,
        last_name: user.user_metadata.last_name,
      }
      setUser(currentUser)
      console.log("Updated current user:", currentUser.first_name, currentUser.last_name)
      return true
    }
  }

export const fetchRefreshToken = async (setUser) => {
    const { error } = await supabase.auth.getSession()
    if (error) {
      console.log('Error refreshing session', error)
    } else {
      console.log('Successfully refreshed session with refresh token')
      console.log('Updating current user')
      // updateCurrentUser();
      const { data: { user }, error } = await supabase.auth.getUser()
      if (error) {
        console.log('Still cant get user from new session')
        return false
      } else {
        const currentUser = {
          first_name: user.user_metadata.first_name,
          last_name: user.user_metadata.last_name,
        }
        setUser(currentUser)
        console.log("Finally able to update current user:", currentUser.first_name, currentUser.last_name)
        return true
      }
  }
}
// TODO: add other auth related functions (login, signup)