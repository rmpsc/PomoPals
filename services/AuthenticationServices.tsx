// Checks if a user is logged in to skip login/sign up pages
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://broqnokklyltdgpeaakk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyb3Fub2trbHlsdGRncGVhYWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMDg0ODgsImV4cCI6MjAwNzg4NDQ4OH0.fgSWYn6f9Uv_nEypz_JMwl-AyVk4GILpiHzaVI1CEJk', {
  auth: {
    persistSession: true,
    storage: AsyncStorage
  }
});

export const storeAccessToken = async (token) => {
  try {
    await AsyncStorage.setItem('userToken', token);
  } catch (e) {
    console.log('Error storing token:', e);
    // TODO: handle unexpected api errors possibly due to network issues, storage, etc
  }
}

export const getAccessToken = async () => {
  try {
    return await AsyncStorage.getItem('userToken');
  } catch (e) {
    console.log('error fetching token');
    // TODO: handle unexpected api errors possibly due to network issues, storage, etc
  }
}

export const removeAccessToken = async () => {
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

export const getCurrentUser = async () => {
  // TODO: validate accessToken before making api call
  // this makes it so you don't have to recall api after session is refreshed + makes sure session is refreshed for only the appropriate errors

  // Takes in an optional access token jwt. If no jwt is provided, getUser() will attempt to get the jwt from the current session.
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) {
    console.log("Error fetching current user", error)
    refreshSession();
  } else {
    return user
  }
}

export const getCurrentSession = async () => {
  const { data: { session }, error } = await supabase.auth.getSession()
  if (error) {
    console.log("Error fetching current session", error)
  } else {
    return session
  }
}

export const refreshSession = async () => {
  console.log("Attempting to refresh session")
  const { error } = await supabase.auth.refreshSession()
  if (error) {
    console.log("Error refreshing session", error)
  }
  console.log("Refresh successful", error)
}

export const updateCurrentUser = async (setUser) => {
  const currentUser = await getCurrentUser();
  const userMetadata = {
    first_name: currentUser.user_metadata.first_name,
    last_name: currentUser.user_metadata.last_name,
  }
  if (userMetadata) {
    setUser(userMetadata);
    console.log("Updated current user:", userMetadata.first_name, userMetadata.last_name)
    return true
  }
  console.log("Error updating current user", userMetadata)
  return false
}
// TODO: add other auth related functions (login, signup)
export const handleLoginAndSignUp = async (newUser: boolean, setUser, navigation, email: string, password: string, firstName?: string, lastName?: string, ) => {
  // if (!email || !password || !firstName || !lastName) {
  //   console.log("Make sure to fill in all fields");
  // }
  let userData: any
  if (newUser) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          // snake case is a common convention for sql
          first_name: firstName,
          last_name: lastName
        },
      },
    })
    if (error) {
      console.log('Error signing up:', error.message)
      return;
    } else {
      userData = data
    }
  } else {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) {
      console.log('Error signing up:', error.message)
      return;
    } else {
      userData = data
    }
  }
  await updateCurrentUser(setUser)
  await storeAccessToken(userData?.session.access_token)
  await storeRefreshToken(userData?.session.refresh_token)
  navigation.navigate('Homepage')
}
