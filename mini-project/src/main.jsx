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
// import Admin from "./pages/AdminPage.jsx";
import BeasiswaDetail from "./pages/BeasiswaDetailPage.jsx";
import UserDetail from "./pages/UserDetail.jsx";
import UserBeasiswa from "./pages/UserBeasiswa.jsx";
import Admin from "./routes/Admin.jsx";
import AdminBeasiswa from "./pages/AdminBeasiswa.jsx";
import AdminDetail from "./pages/AdminDetail.jsx";
import AdminUpload from "./pages/AdminUpload.jsx";
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://evolved-akita-43.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "zMtgC7OoLa1X4PlfLtnPwBhtRlLUyWpUNWdyVZJvoH4wbZGHW6gpAjug68Es4FHB",
      },
    },
  })
);
const httpLink = new HttpLink({
  uri: "https://evolved-akita-43.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "zMtgC7OoLa1X4PlfLtnPwBhtRlLUyWpUNWdyVZJvoH4wbZGHW6gpAjug68Es4FHB",
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
  },
  {
    path: "/daftar",
    element: <RegisterPage />,
  },
  {
    path: "/userPage",
    element: <User />,
    children: [
      {
        index: true,
        path: "beasiswa",
        element: <UserBeasiswa />,
      },
      {
        path: "detail",
        element: <UserDetail />,
      },
    ],
  },
  {
    path: "/adminPage",
    element: <Admin />,
    children: [
      {
        index: true,
        element: <AdminBeasiswa />,
      },
      {
        path: "upload",
        element: <AdminUpload />,
      },
      {
        path: "userList",
        element: <AdminDetail />,
      },
    ],
  },
  {
    path: "/beasiswa/:id",
    element: <BeasiswaDetail />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ApolloProvider>
);
