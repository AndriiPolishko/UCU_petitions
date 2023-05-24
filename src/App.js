import "./App.css";
import PageLayout from "./PageLayout/PageLayout";
import PetitionPage from "./PetitionPage/PetitionPage";
import PetitionForm from "./PetitionForm/PetitionForm";
import AllPetitionsContainer from "./PetitionContainers/AllPetitionsContainer";
import ConsideredPetitionsContainer from "./PetitionContainers/ConsideredPetitionsContainer";
import AuthHandler from "./AuthHandler/AuthHandler";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "./UserContext/UserContext";
import { useState } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <AllPetitionsContainer />,
      },
      {
        path: "considered",
        element: <ConsideredPetitionsContainer />,
      },
      {
        path: "answered",
        element: <div>Answered Petitions Page</div>,
      },
      {
        path: "user-petitions",
        element: <div>Created/Signed User Petitions Page</div>,
      },
      {
        path: "petition/:id",
        element: <PetitionPage />,
      },
      {
        path: "petition-form",
        element: <PetitionForm />,
      },
      {
        path: "auth",
        element: <AuthHandler />,
      },
    ],
  },
]);

function App() {
  const [user, setUser] = useState({loggedIn: false});

  return (
    <UserContext.Provider value={{user: user, setUser: (user) => setUser(user)}}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
