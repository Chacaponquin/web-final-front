export default function useUser() {
  function getToken(): string | null {
    return localStorage.getItem("token");
  }

  return { getToken };
}
