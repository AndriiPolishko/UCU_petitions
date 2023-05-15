import './App.css';
import PageLayout from './PageLayout/PageLayout';
import PetitionPage from './PetitionPage/PetitionPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const testPetition = {
  Id: 1,
  name: 'Sample',
  author: 'Andrii',
  date: '15.05.2023',
  longDescription: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id reprehenderit magnam, corporis laudantium delectus repellat \
    sit nobis corrupti praesentium quibusdam maxime pariatur sunt explicabo accusantium debitis necessitatibus perspiciatis \
    esse consequatur?`,
  signers: `FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, 
    FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, 
    FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, 
    FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, 
    FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, 
    FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, 
    FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, 
    FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name, FirtsName Second Name `,
  signs: 123,
  signsNeeded: 321,
  status: 'Очікування',
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <div>All Petitions Page</div>,
      },
      {
        path: 'considered',
        element: <PetitionPage petition={testPetition} />,
      },
      {
        path: 'answered',
        element: <div>Answered Petitions Page</div>,
      },
      {
        path: 'user-petitions',
        element: <div>Created/Signed User Petitions Page</div>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <PetitionPage></PetitionPage>
    </div>
  );
}
export default App;
