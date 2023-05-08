import { gql, useQuery } from "@apollo/client";
import { atom } from "jotai";
import Cookies from "js-cookie";

// const GET_USERS = gql`
//   query MyQuery {
//     users {
//       id
//       email
//       password
//       domisili
//       pendidikan
//       namaDepan
//       namaBelakang
//     }
//   }
// `;
// function getUser() {
//   const { loading, error, data } = useQuery(GET_USERS);
//   if (loading) return "Loading...";
//   if (error) return `Error! ${error.message}`;
//   return data.users;
// }

// export const usersData = atom([]);
export const authAtom = atom({
  // user: [],
  user: JSON.parse(localStorage.getItem("userData")),
  token: Cookies.get("auth_token"),
});
