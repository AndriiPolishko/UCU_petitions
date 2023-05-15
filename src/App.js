import './App.css';
import PageLayout from './PageLayout/PageLayout';
import PetitionPage from './PetitionPage/PetitionPage';
import Petition from './Petition/Petition';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: (
          <div>
            <Petition />
          </div>
        ),
      },
      {
        path: 'considered',
        element: <div>considered</div>,
      },
      {
        path: 'answered',
        element: <div>Answered Petitions Page</div>,
      },
      {
        path: 'user-petitions',
        element: <div>Created/Signed User Petitions Page</div>,
      },
      {
        path: 'petition/:id',
        element: <PetitionPage />,
      },
      {
        path: 'petition-form',
        element: <PetitionForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
