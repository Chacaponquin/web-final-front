import { useContext } from "react";
import { UserContext } from "../contexts";

export default function useUser() {
  const { actualUser } = useContext(UserContext);

  function getToken(): string | null {
    return localStorage.getItem("token");
  }

  return { getToken, actualUser };
}
