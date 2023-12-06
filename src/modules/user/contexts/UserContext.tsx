import { createContext, useState } from "react";
import { User } from "../models";

interface Props {
  actualUser: User | null;
  handleChangeUser(user: User): void;
  handleCloseUser(): void;
}

const UserContext = createContext<Props>({ actualUser: null } as Props);

function UserProvider({ children }: { children: React.ReactNode }) {
  const [actualUser, setActualUser] = useState<User | null>(null);

  function handleChangeUser(user: User) {
    setActualUser(user);
  }

  function handleCloseUser() {
    setActualUser(null);
  }

  const value = { actualUser, handleChangeUser, handleCloseUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
