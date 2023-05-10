import { atom } from "jotai";
import Cookies from "js-cookie";

export const authAtom = atom({
  user: JSON.parse(localStorage.getItem("userData")),
  token: Cookies.get("auth_token"),
});
