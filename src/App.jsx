import './App.css';
import characters from './data/characters.json';
import CharactersList from './components/CharactersList';
import NumberOfCharacters from './components/NumberOfCharacters';
import AboutPage from './pages/AboutPages.jsx';
import ContactPage from './pages/ContactPages.jsx';
import CharactersPage from './pages/CharactersPages.jsx';

function App() {
  return (
    <>
      
      {/* <h1>Marvel Characters</h1>
      <CharactersList characters={characters} />
      <NumberOfCharacters characters={characters} /> */}
      <ContactPage />
      <AboutPage />
      <CharactersPage/>
    </>
  );
}

export default App
