import { createContext } from "react";
import { Cookies } from "react-cookie"
const cookies = new Cookies()


export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {
  cookies.remove("TOKEN")
},
});
