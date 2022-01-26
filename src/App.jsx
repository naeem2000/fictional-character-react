import './App.scss';
import Logo from './components/logo/logo';
import NavBar from './components/navbar/navbar';
import About from './components/about/about';
import Background from './components/background/background';
import Personality from './components/personality/personality';

function App() {
  return (
    <div className="App">
      <Logo />
        <h1>Madara Uchiha</h1>
        <div className="sections">
      <NavBar />
      <About />
      <Background />
      <Personality />
      </div>
    </div>
  );
}

export default App;
