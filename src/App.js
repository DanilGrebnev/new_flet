import Header from './components/pages/1_header/header';
import System from './components/pages/2_system/system';
import Wish from './components/pages/3_wish/wish';
import AllApps from './components/pages/4_all-apps/all-apps';
import Flet from './components/pages/5_flet/flet';
import Starts from './components/pages/6_starts/starts';
import Ecosystem from './components/pages/7_ecosystem/ecosystem';
import Style from './components/pages/8_style/style';
import Bonus from './components/pages/9_bonus/bonus';

function App() {
  return (
    <>
      <Header />
      <System />
      <Wish />
      <AllApps />
      <Flet />
      <Starts />
      <Ecosystem />
      <Style />
      <Bonus />
    </>
  );
}

export default App;
