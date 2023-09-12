import React, { createContext, useContext, ReactNode } from 'react';

// Define the shape of your user data
interface User {
  first_name: string;
  last_name: string;
}

// Create the context
interface UserContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

// Custom hook for consuming the context
export function useUser() {
  // useContext returns current context value
  const contextValue = useContext(UserContext);
  if (contextValue === undefined) {
    throw new Error('useUser must be used within a UserContextProvider');
  }
  return contextValue;
}

// Context provider component
interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [user, setUser] = React.useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
