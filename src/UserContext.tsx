import React, { createContext, useState, ReactNode } from 'react';

export type User = { username: string; password: string; role: string };

type UserContextType = {
  users: User[];
  addUser: (user: User) => void;
};

export const UserContext = createContext<UserContextType>({
  users: [],
  addUser: () => {}
});

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (user: User) => {
    setUsers(prev => [...prev, user]);
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
