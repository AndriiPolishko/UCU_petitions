import "./App.css";
import PageLayout from "./PageLayout/PageLayout";
import PetitionForm from "./PetitionForm/PetitionForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <div>All Petitions Page</div>,
      },
      {
        path: "considered",
        element: <div>Considered Petitions Page</div>,
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
        path: "petition-form",
        element: <PetitionForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
