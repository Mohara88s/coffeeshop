import { createContext, ReactNode, useState } from 'react';
import { User, UserContextType } from './types';

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

const defaultUser: User = {
  firstName: 'John',
  lastName: 'Snow',
  phoneNumber: '+380971234567',
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(defaultUser);

  const updateUser = (newData: User) => {
    setUser(newData);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
