import React, { ReactElement, createContext, useState, Dispatch, SetStateAction } from 'react';
import { User } from '../controllers/controllers';

interface UserContextProps {
  children: ReactElement;
}

interface ContextType {
  user?: User;
  setuser: Dispatch<SetStateAction<User | undefined>>;
}

const initialstate: User = {
  id: '',
  isLoggin: false,
  userName: '',
  name: '',
  lastName: '',
  email: '',
  password: '',
  avatar: '',
  aboutme: '',
  postulaciones_id_ong: undefined,
  city: '',
  country: '',
  workmodality: '',
  areas: '',
};

export const userContext = createContext<ContextType>({
  user: initialstate,
  setuser: () => {},
});

export default function UserProvider({ children }: UserContextProps): ReactElement {
  const [user, setuser] = useState<User | undefined>(undefined);

  return <userContext.Provider value={{ user, setuser }}>{children}</userContext.Provider>;
}
