import "./App.css";
import PageLayout from "./PageLayout/PageLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>All Petitions</div>,
  },
  {
    path: "/considered",
    element: <div>Considered Petitions</div>,
  },
  {
    path: "/answered",
    element: <div>Answered Petitions</div>,
  },
  {
    path: "/user-petitions",
    element: "My Petitions",
  },
]);

function App() {
  return (
    <PageLayout>
      <RouterProvider router={router} />
    </PageLayout>
  );
}

export default App;
