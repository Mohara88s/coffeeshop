export interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface UserContextType {
  user: User;
  updateUser: (newData: User) => void;
}
