import './App.css';
import PetitionPage from './PetitionPage/PetitionPage';
function App() {
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
  return (
    <div className="App">
      <header className="App-header"></header>
      <PetitionPage petition={testPetition} />
    </div>
  );
}
export default App;
