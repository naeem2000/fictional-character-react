import './App.scss';
import Logo from './components/logo/logo';
import NavBar from './components/navbar/navbar';
import About from './components/about/about';
import Amv from './components/amv/amv';
import Background from './components/background/background';
import Personality from './components/personality/personality';
import Appearance from './components/appearance/appearance';
import Abilities from './components/abilities/abilities';
import Sharingan from './components/sharingan/sharingan';
import Rinnegan from './components/rinnegan/rinnegan';
import Links from './components/links/links';

function App() {
  return (
    <div className="App">
      <Logo />
        <h1>Madara Uchiha</h1>
      <NavBar />
      <About />
      <Amv />
      <Background />
      <Personality />
      <Appearance />
      <Abilities />
      <Sharingan />
      <Rinnegan />
      <h1>More:</h1>
      <Links />
    </div>
  );
}

export default App;
