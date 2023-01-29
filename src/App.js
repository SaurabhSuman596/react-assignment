import useFonts from './hooks/useFonts';
import './stylesheets/_global.scss';
import Community from './pages/community/Community';

function App() {
  useFonts();

  return (
    <div className="app">
      <Community />
    </div>
  );
}

export default App;
