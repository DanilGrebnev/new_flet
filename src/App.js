import './App.css';
import Header from './components/pages/1_header/header';
import System from './components/pages/2_system/system';
import Wish from './components/pages/3_wish/wish';
import AllApps from './components/pages/4_all-apps/all-apps';
import Flet from './components/pages/5_flet/flet';

function App() {
  return (
    <div id="app" >
      <Header />
      <System />
      <Wish />
      <AllApps />
      <Flet />
    </div>
  );
}

export default App;
