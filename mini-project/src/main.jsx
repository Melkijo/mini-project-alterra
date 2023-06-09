import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import Root from "./routes/Root.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import BeasiswaPage from "./pages/BeasiswaPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import "./index.css";
import User from "./routes/User.jsx";
import BeasiswaDetail from "./pages/BeasiswaDetailPage.jsx";
import UserDetail from "./pages/UserDetail.jsx";
import UserBeasiswa from "./pages/UserBeasiswa.jsx";
import Admin from "./routes/Admin.jsx";
import AdminBeasiswa from "./pages/AdminBeasiswa.jsx";
import AdminUpload from "./pages/AdminUpload.jsx";
import AdminUsers from "./pages/AdminUsers.jsx";
import AdminEditPage from "./pages/AdminEditPage.jsx";
import("preline");
const wsLink = new GraphQLWsLink(
   createClient({
      url: "wss://evolved-akita-43.hasura.app/v1/graphql",
      connectionParams: {
         headers: {
            "x-hasura-admin-secret": import.meta.env.VITE_HASURA_ADMIN_SECRET,
         },
      },
   })
);
const httpLink = new HttpLink({
   uri: "https://evolved-akita-43.hasura.app/v1/graphql",
   headers: {
      "x-hasura-admin-secret": import.meta.env.VITE_HASURA_ADMIN_SECRET,
   },
});

const splitLink = split(
   ({ query }) => {
      const definition = getMainDefinition(query);
      return (
         definition.kind === "OperationDefinition" &&
         definition.operation === "subscription"
      );
   },
   wsLink,
   httpLink
);

const client = new ApolloClient({
   link: splitLink,
   cache: new InMemoryCache(),
});
const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,

      children: [
         {
            errorElement: <ErrorPage />,
            children: [
               {
                  index: "true",
                  element: <LandingPage />,
               },
               {
                  path: "beasiswa",
                  element: <BeasiswaPage />,
               },
               {
                  path: "tentang",
                  element: <AboutPage />,
               },
            ],
         },
      ],
   },
   {
      path: "/masuk",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/daftar",
      element: <RegisterPage />,
      errorElement: <ErrorPage />,
   },
   {
      path: "/userPage/",
      element: <User />,
      children: [
         {
            errorElement: <ErrorPage />,
            children: [
               {
                  index: true,
                  element: <UserBeasiswa />,
               },
               {
                  path: "detail",
                  element: <UserDetail />,
               },
            ],
         },
      ],
   },
   {
      path: "/adminPage",
      element: <Admin />,
      errorElement: <ErrorPage />,
      children: [
         {
            // errorElement: <ErrorPage />,
            children: [
               { index: true, element: <AdminBeasiswa /> },
               {
                  path: "upload",
                  element: <AdminUpload />,
               },
               {
                  path: "edit/:id",
                  element: <AdminEditPage />,
               },
               {
                  path: "userList",
                  element: <AdminUsers />,
               },
            ],
         },
      ],
   },
   {
      path: "/beasiswa/:id",
      element: <BeasiswaDetail />,
      errorElement: <ErrorPage />,
   },
   {
      path: "*",
      element: <ErrorPage />,
   },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
   <ApolloProvider client={client}>
      {/* <React.StrictMode> */}
      <RouterProvider router={router} />
      {/* </React.StrictMode> */}
   </ApolloProvider>
);
